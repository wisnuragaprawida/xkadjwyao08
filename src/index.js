const controller =  require('./controller/index');





const main = () => {
  //jalnkan buat cek CRUD provinsie 
  // controller.ProvinceController();
  //jalnkan buat cek CRUD City
  // controller.CityController();
  //jalnkan buat cek CRUD District
  // controller.DistrictController();
  controller.PeopleController();
}

main();