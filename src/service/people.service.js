const utils = require('../utils/');

const service = require('./index')


class PeopleService {

    constructor(time,day) {

        this.people = [];
        this.time = time;
        this.days = day;
        this.response = new utils.Response();
        this.commonResponse = utils.commonResponse;

    }

    register(people) {
        return new Promise((resolve,reject) =>{
            setTimeout( () =>{ 
                
                if (this.days == 'sabtu' || this.days == 'minggu') {
                    reject('Maaf Hari Ini Libur Dulu yaa!')
                }else if(this.time < 8 || this.time > 14){
                    reject('Maaf Saat Ini Bukan Jam Kerja yaaa')
                }else{
                    this.people.push(people)
                    resolve('KTP anda sudah jadi dan terdaftar di dukcapil!')
                }


            },5000)
        })
    }

    get() {
        return new Promise((resolve,reject) =>{
            setTimeout( () =>{ 

                if (this.people.length > 0) { 
                    const result = {
                        data: this.people,
                        response: this.response.successMessage(this.people)
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

                for (let i = 0; i < this.people.length; i++) {
                    if (this.people[i].nik === nik) {
                        const result = {
                            data: this.people[i],
                            response: this.response.successMessage(this.people[i])
                        }
                        resolve(result);
                        break;
                    } else {
                        reject(this.response.errorMessage(`${nik} not found`));
                    }
                }


            },5000)
        })

    }

}

// jam sama harinya di kirim lewat parameter waktu inisiasi 
const peopleService = new PeopleService(9,'senin');

module.exports = {PeopleService,peopleService};