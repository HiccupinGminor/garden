"use strict";

var Recommender = require('../models/Recommender');

module.exports = {
	all: function(io) {
		return function(req, res) {
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
		}
	},
};