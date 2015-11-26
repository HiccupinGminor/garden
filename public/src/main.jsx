"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

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

		function listener () {
		  var newState = JSON.parse(this.response);

		  that.setState({
		  	readings: newState, 
		  });
		};

		var req = new XMLHttpRequest();
		req.addEventListener("load", listener);
		req.open("GET", "api/v1/readings");
		req.send();
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
