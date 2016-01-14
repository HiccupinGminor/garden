"use strict";

require('isomorphic-fetch');

const React = require('react'),
		Readings = require('./Readings.jsx'),
		io = require('socket.io-client'),
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
	
		const load = () => {
			fetch('api/v1/readings')
				.then((response) => {
					return response.json();
				})
				.then((readings) => {
					this.setState({
				  	readings: readings,
				  	last: readings.pop(),
					});
				});
		};

		socket.on('readings', function() {
			console.log("Received!");
			load();
		});

		load();
	}
});