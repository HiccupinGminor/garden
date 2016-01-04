"use strict";

var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<ul>
				<li>Lux: {this.props.last.lux}</li>
				<li>Temp: {this.props.last.temp}</li>
				<li>pH: {this.props.last.pH}</li>
			</ul>
		);
	}
});