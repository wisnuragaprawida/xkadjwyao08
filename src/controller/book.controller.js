const Book = require('../model/book');
const BookService = require('../service/book.service');


async function BookController() {
   
    console.log(`Enigma Perpustakaan`);
    const bookService = new BookService();
    console.log(`-=========== Tambah Buku`)
    const book01 = new Book('B001');
    const book02 = new Book('B001', 'Book 01', 'PT ABC', 2022, 'Juju');
    const book03 = new Book('B002', 'Book 02', 'PT XYZ', 2022, 'Bulan');
    const add02 = await bookService.add(book03).catch(err => err);
    console.log(add02);
    const add01 = await bookService.add(book02).catch(err => err);
    console.log(add01);
   
   
    
    console.log(`-=========== List Buku`);
    const list = await bookService.list().catch(err => err);
    console.log(list);
    console.log(`-=========== Filter Buku Berdasarkan Judul`);
    const findBook01 = await bookService.findByTitle('book 0').catch(err => err);
    console.log(findBook01);
    console.log(`-=========== Hapus Buku Berdasarkan Code`);
    const delBook01 = await bookService.delete('B001').catch(err => err);
    console.log(delBook01);
    console.log(`-=========== Cari Buku Yang Telah Di Hapus`);
    const findBook02 = await bookService.findByTitle('book 01').catch(err => err);
    console.log(findBook02);
}

module.exports = BookController;