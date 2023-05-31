// load all handler func used to routes.js

const { nanoid } = require("nanoid");
const books = require("./books");

const addBooksHandler = (request, h) =>{
const {name, year, author,summary,publisher,pageCount,readPage,reading} = request.payload;

const id = nanoid(16); // nilai properti id
// var dari finished

let pageCount =100;
let readPage = 100;

let finished=(pageCount, readPage)=>{
return (pageCount===readPage)? true:false;
};

console.log(finished(pageCount, readPage));

let insertedAt = new Date().toISOString();
let updatedAt = insertedAt;

let newBooks = {
id, name, year, author,summary, publisher, pageCount, readPage,
finished, reading, insertedAt, updatedAt
};
books.push(newBooks);

const isSuccess = books.filter((note)=>book.id===id).length >0;

if(isSuccess) {
    const response= h.response({
        status : 'success',
        message : 'Buku berhasil ditambahkan'
        data: {
            bookId: id,
        },
    });
    response.code(201);
    return response;
}
const response = h.response({
    status: 'fail',
    message: "gagal menambahkan buku"
})
};

module.exports = {addBooksHandler};