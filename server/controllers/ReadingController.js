"use strict";
var express = require('express');
var router = express.Router();
var Reading = require('../models/Reading');
var ErrorHandler = require('../utilities/ErrorHandler');

router.get('/', function(req, res) {
	Reading.find().exec()
		.then(function(data) {
			res.send(data);
		})
		.catch(ErrorHandler);
});

router.get('/:id?', function(req, res) {
	Reading
		.findById(req.params.id)
		.exec()
		.then(function(data) {
			res.send(data);
		})
		.catch(function(error) {
			if(error.name == 'CastError') {
				res.sendStatus(404);
			}
			else {
				res.sendStatus(500);
			}
		});
});

module.exports = router;