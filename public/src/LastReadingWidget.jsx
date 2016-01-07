"use strict";

const React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section className="last-reading">
				<h1>Last Reading</h1>	
				<ul>
					<li><strong>Lux:</strong> {this.props.last.lux}</li>
					<li><strong>Temp:</strong> {this.props.last.temp}</li>
					<li><strong>pH:</strong> {this.props.last.pH}</li>
				</ul>
			</section>
		);
	}
});