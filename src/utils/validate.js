class Validate {
    constructor() {}

    isExist(datas) {
        if (datas.length === 0) {
            return false;
        }
        return true;
    }

    // require(book) {
    //     if (!book.code || !book.title || !book.publisher || !book.publicationYear || !book.author) {
    //         return false;
    //     }
    //     return true;
    // }
    isOfficeHours(time) {
        if (time < 8  && time > 14) {
            return false;
        }
        return true;
    }
    isOfficeOpen(days) {
        if (days == sabtu || days == minggu) {
            return false;
        }
        return true;
    }
    isNikExist(nik) {
        if (nik == "") {
            return false;
        }
        return true;
    }
     require(data) {
            if (!data.id || !data.name) {
                return false;
            }
            return true;
        }
}

module.exports = Validate;