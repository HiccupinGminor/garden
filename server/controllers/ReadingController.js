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
	res.send("ID: " + req.params.id);
});

router.post('/', function(req, res) {
	var body = req.body,
			model;

	model = new Reading(body);
	model.save()
	.then(function(data) {
		res.send(data);
	})
	.catch(ErrorHandler);
});

module.exports = router;