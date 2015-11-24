"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Readings = React.createClass({
	getInitialState: function() {
		return {
			lux: 'Pending',
			humidity: 'Pending',
			pH: 'Pending',
		};
	},

	render: function() {
		return (
			<ul>
				<li>Lux: {this.state.lux}</li>
				<li>Humidity: {this.state.humidity}</li>
				<li>pH: {this.state.pH}</li>
			</ul>
		);
	},
	
	componentDidMount: function() {
		var that = this;

		function listener () {
		  var newState = JSON.parse(this.response)[0];

		  that.setState({
		  	lux: newState.lux,
		  	humidity: newState.humidity,
		  	pH: newState.pH
		  });
		};

		var req = new XMLHttpRequest();
		req.addEventListener("load", listener);
		req.open("GET", "api/v1/readings");
		req.send();
	}
});

ReactDOM.render(<Readings />, document.getElementById('mount'));
