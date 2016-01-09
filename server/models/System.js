"use strict";

const Mongoose = require('mongoose'),
			Schema = Mongoose.Schema,
			schema = new Schema({
				lightsOn: {
					type: Boolean,
				},
			});

module.exports = Mongoose.model('System', schema);