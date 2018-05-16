const express = require('express');
const app = express(); // crea una instancia de una aplicación de express

app.use('/', function(req, res, next) {
  console.log('hola');
  next();
});

app.use('/special', function(req, res, next) {
  console.log('haz llegado a un area especial');
  next();
});

app.listen(3000);
