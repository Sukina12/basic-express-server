'use strict';
// require express to run the server and handle the request
const express = require('express');
const app = express();
app.use(express.json());

// require errors files & the middlewares 
const errorHandler = require ('./error-handlers/500');
const notFounHandler = require ('./error-handlers/404');
const logger = require ('./middlewares/logger');
const validator = require ('./middlewares/validator');

// use logger middleware as a global
app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.send('Hello From Sukina Class 2 !')
});

app.get('/person', validator, (req,res) => {
  const result = {
    name : req.query.name,
  };
  res.json(result);
});

// make 404 error file global
app.use ('*', notFounHandler);

// make 500 error file global
app.use (errorHandler);

// start function
function start(port) {
  app.listen(port, () => {
    console.log (`app is listening on the port ${port}`)
  });
}

module.exports = {
  app: app,
  start: start,
}
