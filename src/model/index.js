
const City = require('./city');
const District = require('./district');
const Province = require('./province');
const People = require('./people');


const models = {}

models.Province = Province;
models.City = City;
models.District = District;
models.People = People;


module.exports = models;
