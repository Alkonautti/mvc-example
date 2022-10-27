var express = require('express');
const { route } = require('.');
var router = express.Router();
var book = require('../bin/models/book_model');

/* GET book listing. */
router.get('/',
  function (request, response, next) {
    let data = book.getAllBooks();
    response.send(data);
  }
);

router.get('/:id',
  function (request, response) {
    let data = book.getOneBook(request.params.id);
    response.send(data);
  }
);

router.post('/',
  function (request, response) {
    let data = book.addBook(request.body);
    response.send(data);
  }
);

router.put('/:id',
  function (request, response) {
    let data = book.updateBook(request.params.id);
    response.send(data);
  }
);

router.delete('/:id',
  function (request, response) {
    let data = book.deleteBook(request.params.id);
    response.send(data);
  }
);

module.exports = router;
