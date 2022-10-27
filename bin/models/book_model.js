/*
var mySql = require('mysql');

const db = mySql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    database: "books"
});
*/
const book = {
    getAllBooks: function () {
        return 'Model palauttaa kaikki kirjat'

    },

    getOneBook: function (id) {
        return 'Model palauttaa kirjan, jonka id: ' + id
    },

    addBook: function(insertData){
        return insertData;
    },
    /*
    addBook: function (insertData) {
        let data = insertData;
        db.query("INSERT INTO books (name) VALUES ('+data+')", (error, result) => {
            return "Success";
        });
    },
    */
    
    updateBook: function (id) {
        return 'Model päivittää kirjan, jonka id: ' + id;
    },

    deleteBook: function (id) {
        return 'Model poistaa kirjan, jonka id: ' + id;
    }
}

module.exports = book;