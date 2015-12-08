"use strict";

var React = require('react');
var Readings = require('./Readings.jsx');
var io = require('socket.io-client');

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
		var that = this;

		var socket = io.connect('http://localhost:8000');

		socket.on('readings', function() {
			console.log("Received!");
			load();
		});

		function listener () {
		  var newState = JSON.parse(this.response);

		  that.setState({
		  	readings: newState, 
		  });
		};

		function load() {
			var req = new XMLHttpRequest();
			req.addEventListener("load", listener);
			req.open("GET", "api/v1/readings");
			req.send();	
		}

		load();
	}
});