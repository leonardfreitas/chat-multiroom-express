// import express, consign, body-parser, express-validator
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// start express object
var app = express();

// configure view egine
app.set('view engine', 'ejs');
app.set('views', './app/views');

// configure midlewares
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

// configure consign (autoload)
consign()
      .include('app/routes')
      .then('app/models')
      .then('app/controllers')
      .into(app);

module.exports = app; //export app object
