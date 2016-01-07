"use strict";

const React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<table>
				<thead>
					<th>Lux</th>
					<th>Humidity</th>
					<th>PH</th>
				</thead>
				<tbody>
					{this.props.data.map(function(reading) {
						return (
							<tr>
								<td>{reading.lux}</td>,
								<td>{reading.humidity}</td>,
								<td>{reading.pH}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		);
	}
});