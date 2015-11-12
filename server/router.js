"use strict";

var express = require('express');
var ReadingController = require('./controllers/ReadingController');
var router = express.Router();

router.use('/readings', ReadingController);
module.exports = router;