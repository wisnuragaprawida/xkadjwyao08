const service = require('../service/index');
const models = require('../model/index');


const provinceService = service.provinceService;

const jatim = new models.Province('01', 'Jawa Timur');
const jabar = new models.Province('02', 'Jawa Barat');
const jateng = new models.Province('03', 'Jawa Tengah');

const cityService = service.cityService;
const pasuruan = new models.City('11', 'Pasuruan', '01');
const surabaya = new models.City('12', 'Surabaya', '01');
const mojokerto = new models.City('13', 'Mojokerto', '01');

const districtService = service.districtService;
const prigen = new models.District('21', 'Prigen','11');
const sokorejo = new models.District('22', 'Sukorejo','11');
const gempol = new models.District('23', 'Gempol','11');


const raga = new models.People('01','raga gans','pria','17-04-02','Lumajang','01','11','21');
const prily = new models.People('02','Prilly','wanita','20-04-02','Jakarta','01','11','21');

const peopleService = service.peopleService;

async function PeopleController(){


console.log('========== add Province ==========');

provinceService.addProvince(jatim);
provinceService.addProvince(jabar);
provinceService.addProvince(jateng);

setTimeout(()=>{
    console.log('========== add City ==========')
},1000);

cityService.addCity(pasuruan);
cityService.addCity(surabaya);
cityService.addCity(mojokerto);
setTimeout(()=>{
    console.log('========== add District ==========')
},1000);

districtService.addDistrict(prigen);
districtService.addDistrict(sokorejo);
districtService.addDistrict(gempol);

setTimeout(()=>{
    console.log('========== add Raga, tapi pas hari minggu')
},1000)

const registerWeekEnd = await peopleService.register(raga,9,'minggu').catch(err => err);  
console.log(registerWeekEnd);
console.log('========== add Raga, dia ngeyel mau buat ktp jam 23 malam')
const registerWeekDaysButNotOfficeHours = await peopleService.register(raga,23,'senin').catch(err => err);  
console.log(registerWeekDaysButNotOfficeHours);
console.log('========== add Raga');
const registerRaga = await peopleService.register(raga).catch(err => err);  
console.log(registerRaga);
console.log('========== add Prily');
const registerPrily = await peopleService.register(prily).catch(err => err);
console.log(registerPrily);
console.log('========== add Raga, Udah Daftar Malah Mau daftar Lagi');
const registerRagaLagi = await peopleService.register(raga).catch(err => err);  
console.log(registerRagaLagi);


console.log('========== show All People');

const getAllPeople = await peopleService.get().catch(err => err);
console.log(getAllPeople.response);

console.log('========== get people by Nik');
const getPeopleByNik =  await peopleService.getByNIK(prily.nik).catch(err => err);
console.log(getPeopleByNik);

}

module.exports = PeopleController;




