"use strict";

var express = require('express');
var app = express();
// var router = require('./server/router.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var routes = require('./server/router');
mongoose.Promise = require('bluebird');

var socketServer = require('http').Server(app);
var io = require('socket.io')(socketServer);
socketServer.listen(8000);

var connect = function connect() {
	mongoose.connect('mongodb://localhost/garden');
}
connect();

db.on('error', console.log);
db.on('disconnected', connect);

app.use(bodyParser.json());
app.use(express.static('public'));
app.listen(3000);

routes(app, io);