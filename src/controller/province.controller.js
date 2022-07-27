const service = require('../service/index');
const models = require('../model/index');


const provinceService = service.provinceService;

const province1 = new models.Province('01', 'Jawa Timur');
const province2 = new models.Province('02', 'Jawa Barat');
const province3 = new models.Province('03', 'Jawa Tengah');
const province5 = new models.Province('03', 'Jawa Tengah tapi di ubah');

function ProvinceController() {
  
  
    
    provinceService.addProvince(province1);
    provinceService.addProvince(province2);
    provinceService.addProvince(province3);

    

    provinceService.getProvince();
    
    provinceService.getProvinceById('02');
    provinceService.deleteProvinceById('02');
    provinceService.updateProvinceById(province5);
    provinceService.getProvince();

    return provinceService;
}

module.exports = ProvinceController;
