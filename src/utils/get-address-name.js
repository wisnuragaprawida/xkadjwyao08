function getAddressName(id, Adress) {

    return Adress.find(x => x.id === id).name;
    

}

module.exports = getAddressName;