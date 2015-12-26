"use strict";

var Reading = require('./models/Reading');
var Recommender = require('./models/Recommender');
var ErrorHandler = require('./utilities/ErrorHandler');
var baseUrl = '/api/v1';
var ReadingController = require('./controllers/ReadingController');

module.exports = function routes(app, io) {

	app.post(baseUrl + '/readings', ReadingController.create(io));

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

	app.get(baseUrl + '/recommendations', function(req, res) {
		var data,
				query = req.query;

		if(!query.zip || !Recommender.isValid(query.zip, query.light)) {
			res.sendStatus(400);
		}
		else {
			data = Recommender.guess(query.zip, query.light) || [];
			res.type('application/json');
			res.send(data);
		}
		
	});
}