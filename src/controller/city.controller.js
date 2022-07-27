const service = require('../service/index');
const models = require('../model/index');


const cityService = service.cityService;
const city1 = new models.City('11', 'Pasuruan', '01');
const city2 = new models.City('12', 'Surabaya', '01');
const city3 = new models.City('13', 'Mojokerto', '01');
const city5 = new models.City('13', 'Mojokerto juga tapi warna merah', '01');

function CityController() {
  
  
    
    cityService.addCity(city1);
    cityService.addCity(city2);
    cityService.addCity(city3);

    

    cityService.getCity();
    
    cityService.getCityById('12');
    cityService.deleteCityById('12');
    cityService.updateCityById(city5);
    cityService.getCity();
}

module.exports = CityController;