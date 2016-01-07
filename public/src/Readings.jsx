"use strict";

const React = require('react');

module.exports = React.createClass({
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