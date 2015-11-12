"use strict";
var express = require('express');
var router = express.Router();
var Reading = require('../models/Reading');

router.get('/', function(req, res) {
	res.send("OK!");
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
	.catch(function(error) {
		console.log(error);
	});
});

module.exports = router;