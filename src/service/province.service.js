const BaseService = require('./base.service');


class ProvinceService extends BaseService {

    constructor() {
        super();
        this.province = [];

    }

   

    async addProvince(data){

        try {
            const add = await this.add(data);
            this.province.push(add.data);
            console.log(add.response);
        } catch (error) {
            console.log(error)
        }
        
    }

    

    async getProvince(){
        try {
            const result = await this.get(this.province);
            console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error)
        }
    }
  
    async getProvinceById(id){
        try {
            const result = await this.getById(id , this.province)
            // console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error);
        }
       
    }
    async deleteProvinceById(id){
        try {
            const result = await this.delete(id, this.province);
            console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }

    async updateProvinceById(id){

        try {
            const result = await this.update(id, this.province);
            console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error);
        }

    }





}
const provinceService = new ProvinceService();

module.exports = {ProvinceService, provinceService};