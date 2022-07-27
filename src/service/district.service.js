const BaseService = require('./base.service');

class DistrictService extends BaseService {

    constructor() {
        super();
        this.districts = [];

    }
    async addDistrict(data){

        try {
            const add = await this.add(data);
            this.districts.push(add.data);
            console.log(add.response);
        } catch (error) {
            console.log(error)
        }
        
    }

    

    async getDistrict(){
        try {
            const result = await this.get(this.districts);
            console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error)
        }
    }
  
    async getDistrictById(id){
        try {
            const result = await this.getById(id , this.districts)
            console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error);
        }
       
    }
    async deleteDistrictById(id){
        try {
            const result = await this.delete(id, this.districts);
            console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }

    async updateDistrictById(id){

        try {
            const result = await this.update(id, this.districts);
            console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error);
        }

    }
  

}
const districtService = new DistrictService();

module.exports = {DistrictService, districtService};