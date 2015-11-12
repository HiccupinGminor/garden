"use strict";

var express = require('express');
var app = express();
var router = require('./server/router.js');

app.use('/api/v1', router);
app.use(express.static('public'));
app.listen(3000);