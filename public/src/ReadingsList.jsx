"use strict";

const React = require('react'),
		Readings = require('./Readings.jsx'),
		io = require('socket.io-client'),
		Data = require('./Data'),
		LastReadingWidget = require('./LastReadingWidget.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			readings: [],
			last: {},
		};
	},

	render: function() {
		return (
			<section>
				<LastReadingWidget last={this.state.last} />
				<Readings data={this.state.readings} />
			</section>
		);
	},
	
	componentDidMount: function() {
		const that = this,
				socket = io.connect('http://localhost:8000');

		function listener () {
		  const newState = JSON.parse(this.response);

		  that.setState({
		  	readings: newState,
		  	last: newState.pop(),
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