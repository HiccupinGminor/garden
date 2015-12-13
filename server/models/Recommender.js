"use strict";

var zipMap = require('../data/hardiness-zones.json');

module.exports = {
	guess: function(zip, light) {
		return zipMap[zip];
	}
};