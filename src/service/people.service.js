const utils = require('../utils/');
const getAddressName = require('../utils/get-address-name');

const {provinceService} = require('./province.service');
const {cityService} = require('./city.service');
const {districtService} = require('./district.service')

const validate = new utils.Validate()


class PeopleService {

    constructor() {

        this.people = [];
        this.response = new utils.Response();
        this.commonResponse = utils.commonResponse;
        

    }

    register(people,time,days) {
        return new Promise((resolve,reject) =>{

            setTimeout( () =>{ 
                const objPeople = people;
                let birthDateContainer;
                if (objPeople.gender == 'wanita') {
                    let birthDateSplit = objPeople.birthDate.split('-');
                    let addDate = Number(birthDateSplit[0]) + 40;
                    let date = String(addDate);
                     birthDateContainer = date + birthDateSplit[1] + birthDateSplit[2];
                }else{
                    birthDateContainer = objPeople.birthDate.split('-').join('');
                }
                let result = objPeople.provinceId + objPeople.cityId + objPeople.districtId + birthDateContainer  + '00' + objPeople.id;
        
                objPeople.nik = result;

                const isNikExist = validate.isNikExist(objPeople.nik, this.people)
                
                if (days == 'sabtu' || days == 'minggu') {
                    reject('Maaf Hari Ini Libur Dulu yaa!')
                }else if(time < 8 || time > 14){
                    reject('Maaf Saat Ini Bukan Jam Kerja yaaa')
                }else if(isNikExist){
                    reject('Mohon Maaf NIK Sudah Terdaftar');
                }else{
                    this.people.push(objPeople)
                    resolve(`Hai ${objPeople.name}, KTP anda sudah jadi dan terdaftar di dukcapil!`)
                }


            },5000)
        })
    }

    get() {
        return new Promise((resolve,reject) =>{
            setTimeout( () =>{ 

                if (this.people.length > 0) {

                    const resArr = [];
                    for (let i = 0; i < this.people.length; i++) {
                        const nameProvince = getAddressName(this.people[i].provinceId,provinceService.province);
                        const nameCity = getAddressName(this.people[i].cityId,cityService.cities);
                        const nameDistrict = getAddressName(this.people[i].districtId,districtService.districts);
                        const obj = {
                            id: this.people[i].id,
                            name: this.people[i].name,
                            gender: this.people[i].gender,
                            birthDate: this.people[i].birthDate,
                            placeOfBirth: this.people[i].placeOfBirth,
                            Province: nameProvince,
                            City: nameCity,
                            District: nameDistrict,
                            nik: this.people[i].nik,
                        }
                        resArr.push(obj);
                    }

                    const result = {
                        data: resArr,
                        response: this.response.successMessage(resArr)
                    }             
                     resolve(result);
                 }else {
                     reject(this.response.errorMessage(this.commonResponse.dataNotExist));
                 }


            },5000)
        })
    }

    getByNIK(nik) {

        return new Promise((resolve,reject) =>{
            setTimeout( () =>{ 
                if (this.people.length > 0) {
                    for (let i = 0; i < this.people.length; i++) {
                        if (this.people[i].nik === nik) {
                            const nameProvince = getAddressName(this.people[i].provinceId,provinceService.province);
                            const nameCity = getAddressName(this.people[i].cityId,cityService.cities);
                            const nameDistrict = getAddressName(this.people[i].districtId,districtService.districts);
    
                            const resObj = {
                                id: this.people[i].id,
                                name: this.people[i].name,
                                gender: this.people[i].gender,
                                birthDate: this.people[i].birthDate,
                                placeOfBirth: this.people[i].placeOfBirth,
                                Province: nameProvince,
                                City: nameCity,
                                District: nameDistrict,
                                nik: this.people[i].nik,
    
                            }
                            const result = {
                                data: resObj,
                                response: this.response.successMessage(resObj)
                            }
                            resolve(result);
                            break;
                        } else {
                            reject(this.response.errorMessage(`${nik} not found`));
                        }
                    }
    
                }else{
                    reject(this.response.errorMessage(`People not exist`));
                }
                

            },5000)
        })

    }

}


const peopleService = new PeopleService();

module.exports = {PeopleService,peopleService};