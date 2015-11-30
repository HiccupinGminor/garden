"use strict";

var Reading = require('./models/Reading');
var ErrorHandler = require('./utilities/ErrorHandler');
var baseUrl = '/api/v1';

module.exports = function routes(app, io) {

	app.post(baseUrl + '/readings', function(req, res) {
		var body = req.body,
				model;
			
		model = new Reading(body);
		model.save()
		.then(function(data) {
			io.emit('readings');
			res.status(201).send(data);
		})
		.catch(function(error) {
			if(error.name == 'ValidationError') {
				res.sendStatus(400);
			}
			else {
				res.sendStatus(500);
			}
		});
	});

	app.get(baseUrl + '/readings', function(req, res) {
		Reading.find().exec()
			.then(function(data) {
				res.send(data);
			})
			.catch(ErrorHandler);
	});

	app.get(baseUrl + '/readings/:id?', function(req, res) {
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
}