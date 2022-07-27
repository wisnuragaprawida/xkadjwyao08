const ProvinceController = require('./province.controller');
const CityController = require('./city.controller');
const DistrictController = require('./district.controller')
const PeopleController = require('./people.controller')

const controller = {}

controller.ProvinceController = ProvinceController;
controller.CityController = CityController;
controller.DistrictController = DistrictController;
controller.PeopleController = PeopleController;


module.exports = controller;

