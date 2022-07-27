const Validate = require('../utils/validate');
const {Response, commonResponse} = require('../utils/response');
const randomTimeout = require('../utils/random-timeout');


class BookService extends Validate{
    constructor() {
        super();
        this.books = [];
        this.response = new Response();
    }

    add(book) {

      
        return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (this.require(book)) {
                    this.books.push(book);
                    resolve(this.response.successMessage(book))
                } else {
                    reject(this.response.errorMessage(commonResponse.isRequire));
                }
                }, randomTimeout(1, 3));
        });
        
    }

    list() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.isExist(this.books)) {
                   resolve(this.response.successMessage(this.books))
                } else {
                    reject(this.response.errorMessage(commonResponse.dataNotExist));
                }
            }, randomTimeout(1, 3));     
    });
    }

    findByTitle(title) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
        for (let book of this.books) {
            if (book.title.toLowerCase() === title.toLowerCase()) {
                resolve(this.response.successMessage(book));
            } else {
                reject(this.response.errorMessage(`${title} not found`));
            }
        }
        }, randomTimeout(1, 3));
         });
    }

    delete(code) {

        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (this.isExist(this.books)){
                let i = 0;
                for (let book of this.books){
                    if (book.code.toLowerCase() == code.toLowerCase()){
                        this.books.splice(i, 1);
                        resolve(this.response.successMessage(code, 'Success deleted'));
                    }
                    i++;
                }
            } else {
                reject(this.response.errorMessage(`${code} not found`));
            }
        }, randomTimeout(1, 3));    
        
        });
    }
}

module.exports = BookService;