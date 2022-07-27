const BaseService = require('./base.service');
const {CityService,cityService} = require('./city.service');
const {DistrictService, districtService} = require('./district.service');
const {ProvinceService, provinceService} = require('./province.service');
const {PeopleService,peopleService} = require('./people.service');

const service = {}

service.BaseService = BaseService;
service.CityService = CityService;
service.cityService = cityService;
service.DistrictService = DistrictService;
service.districtService = districtService;
service.ProvinceService = ProvinceService;
service.provinceService = provinceService;
service.PeopleService = PeopleService;
service.peopleService = peopleService;

module.exports = service;
