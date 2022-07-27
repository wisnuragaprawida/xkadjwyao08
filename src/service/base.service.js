const utils = require('../utils/');

const Validate = utils.Validate;


class BaseService extends Validate {
    constructor() {
        super();
        this.response = new utils.Response();
        this.commonResponse = utils.commonResponse;
    }

    add(data) {
       return new Promise((resolve, reject) => {
           setTimeout(() => {

            if (this.require(data)) {
                const result = {
                    data,
                    response: this.response.successMessage(data)
                }
                resolve(result);
            }else {
                reject(this.response.errorMessage(this.commonResponse.isRequire));
            }
               
           }, 1000);
       })
    }
 
    get(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
 
             if (data.length > 0) { 
                const result = {
                    data,
                    response: this.response.successMessage(data)
                }             
                 resolve(result);
             }else {
                 reject(this.response.errorMessage(this.commonResponse.dataNotExist));
             }
                
            }, 1000);
        });
    }
 
    getById(id,datas) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                for (let i = 0; i < datas.length; i++) {
                    if (datas[i].id.toLowerCase() === id.toLowerCase()) {
                        const result = {
                            data: datas[i],
                            response: this.response.successMessage(datas[i])
                        }
                        resolve(result);
                        break;
                    } else {
                        reject(this.response.errorMessage(`${id} not found`));
                    }
                }
                
            }, 1000);
        });

    }
 
    delete(id,datas) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.isExist(datas)){
                    let i = 0;
                    for (let data of datas){
                        if (data.id.toLowerCase() == id.toLowerCase()){

                            const result = {
                                data: datas.splice(i, 1),
                                response: this.response.successMessage(id, 'Success deleted')
                            }
                            
                            resolve(result);
                        }
                        i++;
                    }
                } else {
                    reject(this.response.errorMessage(`${id} not found`));
                }
            }, 1000);     
        });
    }
 
    update(data,datas) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.isExist(data)){
                    let i = 0;
                    for (let item of datas){
                        if (item.id.toLowerCase() == data.id.toLowerCase()){
                            datas[i] = data;
                            const result = {
                                data: datas,
                                response: this.response.successMessage(data)
                            }
                            resolve(result);
                        }
                        i++;
                    }
                } else {
                    reject(this.response.errorMessage(`${id} not found`));
                }
            }, 1000);
        });
    }
 
 }

 module.exports = BaseService;