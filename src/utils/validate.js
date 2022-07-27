class Validate {
    constructor() {}

    isExist(datas) {
        if (datas.length === 0) {
            return false;
        }
        return true;
    }

  
    isOfficeHours(time) {
        if (time < 8  && time > 14) {
            return false;
        }
        return true;
    }
    isOfficeOpen(days) {
        if (days == sabtu || days == minggu) {
            return false;
        }
        return true;
    }
    isNikExist(nik,datas) {
        if (datas.length > 0) {
        for (let data of datas){
            if (data.nik == nik){                                       
                    return true;
            }
            else{
                return false;
            }
            
        }
        }else{
            return false;
        }
        

    }
     require(data) {
            if (!data.id || !data.name) {
                return false;
            }
            return true;
        }
}

module.exports = Validate;