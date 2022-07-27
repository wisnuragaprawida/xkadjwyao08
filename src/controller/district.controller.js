const service = require('../service/index');
const models = require('../model/index');


const districtService = service.districtService;
const district1 = new models.District('21', 'Prigen','11');
const district2 = new models.District('22', 'Sukorejo','11');
const district3 = new models.District('23', 'Gempol','11');
const district5 = new models.District('23', 'gempol tapi g nya kecil','11');

function DistrictController() {
  
  
    
    districtService.addDistrict(district1);
    districtService.addDistrict(district2);
    districtService.addDistrict(district3);

    

    districtService.getDistrict();
    
    districtService.getDistrictById('02');
    districtService.deleteDistrictById('02');
    districtService.updateDistrictById(district5);
    districtService.getDistrict();
}

    module.exports = DistrictController;
