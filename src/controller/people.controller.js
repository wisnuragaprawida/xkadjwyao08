const service = require('../service/index')
const models = require('../model/index');



const raga = new models.People('01','raga gans','pria','17-04-02','Lumajang','01','11','21');
const prily = new models.People('02','Prilly','wanita','20-04-02','Jakarta','01','11','21');

const peopleService = service.peopleService;

// atau

const peopleServiceWeekEnd = new service.PeopleService(20,'minggu');
const peopleServiceWeekDaysButNotOfficrHour = new service.PeopleService(23,'senin');


async function PeopleController(){


console.log('========== add Raga tapi pas hari minggu')
const registerWeekEnd = await peopleServiceWeekEnd.register(raga).catch(err => err);  
console.log(registerWeekEnd);
console.log('========== add Raga dia ngeyel mau buat ktp jam 23 malam')
const registerWeekDaysButNotOfficeHours = await peopleServiceWeekDaysButNotOfficrHour.register(raga).catch(err => err);  
console.log(registerWeekDaysButNotOfficeHours);
console.log('========== add Raga');
const registerRaga = await peopleService.register(raga).catch(err => err);  
console.log(registerRaga);
console.log('========== add Prily');
const registerPrily = await peopleService.register(prily).catch(err => err);
console.log(registerPrily);

console.log('========== show All People');

const getAllPeople = await peopleService.get().catch(err => err);
console.log(getAllPeople.data);

console.log('========== get people by Nik');
const getPeopleByNik =  await peopleService.getByNIK(prily.nik).catch(err => err);
console.log(getPeopleByNik);
}

module.exports = PeopleController;




