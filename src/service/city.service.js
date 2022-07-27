
const BaseService = require('./base.service');
class CityService extends BaseService {

    constructor() {
        super()
        this.cities = [];

    }
    async addCity(data){

        try {
            const add = await this.add(data);
            this.cities.push(add.data);
            console.log(add.response);
        } catch (error) {
            console.log(error)
        }
        
    }

    

    async getCity(){
        try {
            const result = await this.get(this.cities);
            console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error)
        }
    }
  
    async getCityById(id){
        try {
            const result = await this.getById(id , this.cities)
            console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error);
        }
       
    }
    async deleteCityById(id){
        try {
            const result = await this.delete(id, this.cities);
            console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }

    async updateCityById(id){

        try {
            const result = await this.update(id, this.cities);
            console.log(result.response);
            return result.data;
        } catch (error) {
            console.log(error);
        }

    }


}
const cityService = new CityService();

module.exports = {CityService,cityService};