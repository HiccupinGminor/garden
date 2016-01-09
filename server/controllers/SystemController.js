"use strict";

const SystemModel = require('../models/System');

module.exports = {

	first: function(req, res) {
		SystemModel
			.findOne()
			.exec()
			.then(function(data) {
				res.status(200).send(data);
			})
			.catch(function(err) {
				res.status(400).send(err);
			});
	}
}