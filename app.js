"use strict";

var express = require('express');
var app = express();
var router = require('./server/router.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.Promise = require('bluebird');

var connect = function connect() {
	mongoose.connect('mongodb://localhost/garden');
}
connect();

db.on('error', console.log);
db.on('disconnected', connect);

app.use(bodyParser.json());
app.use('/api/v1', router);
app.use(express.static('public'));
app.listen(3000);