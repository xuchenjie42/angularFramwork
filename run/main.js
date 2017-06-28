#!/usr/local/bin/node

'use strict';

var port = 3333;
var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.use(express.static('./'));
// app.use(express.static('./build/debug/public'));

app.listen(port);

console.log('http://localhost:' + port);