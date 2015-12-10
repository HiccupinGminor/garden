"use strict";

var React = require('react');
var Readings = require('./Readings.jsx');
var io = require('socket.io-client');
var Data = require('./Data');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			readings: []
		};
	},

	render: function() {
		return (
			<Readings data={this.state.readings} />
		);
	},
	
	componentDidMount: function() {
		var that = this,
				socket = io.connect('http://localhost:8000');

		function listener () {
		  var newState = JSON.parse(this.response);

		  that.setState({
		  	readings: newState, 
		  });
		};

		function load() {
			Data.request("GET", "api/v1/readings", listener);
		}

		socket.on('readings', function() {
			console.log("Received!");
			load();
		});

		load();
	}
});