class People {

    constructor(id,name,gender,birthDate,placeOfBirth,provinceId,CityId,districtId) {

        this.id = id;

        this.name = name;

        this.gender = gender;

        this.nik;

        this.birthDate = birthDate;
        
        this.placeOfBirth = placeOfBirth;

        this.provinceId = provinceId;

        this.CityId = CityId;

        this.districtId = districtId;

      

        let birthDateContainer;
            if (this.gender == 'wanita') {
                let birthDateSplit = this.birthDate.split('-');
                let addDate = Number(birthDateSplit[0]) + 40;
                let date = String(addDate);
                 birthDateContainer = date + birthDateSplit[1] + birthDateSplit[2];
            }else{
                birthDateContainer = this.birthDate.split('-').join('');
            }
    
            const randomNumber = Math.floor(Math.random() * 1000) + 1000;
    
            let result = this.provinceId + this.CityId + this.districtId + birthDateContainer  + randomNumber;
    
            this.nik = result;
    
       

    }
  

}

module.exports = People;