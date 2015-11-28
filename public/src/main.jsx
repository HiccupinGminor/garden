"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var io = require('socket.io-client');

var ReadingsList = React.createClass({
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

var Readings = React.createClass({
	render: function() {
		return (
			<table>
				<tbody>
					{this.props.data.map(function(reading) {
						return (
							<tr>
								<td>Lux: {reading.lux}</td>,
								<td>Humidity: {reading.humidity}</td>,
								<td>pH: {reading.pH}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		);
	}
});

ReactDOM.render(
	<ReadingsList />, document.getElementById('mount'));
