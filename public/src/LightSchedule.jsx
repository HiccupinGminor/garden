"use strict";

const React = require('react');
const LineChart = require("react-chartjs").Bar;

const chartData = {
  labels: ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
  datasets: [
      {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.5)",
          strokeColor: "rgba(151,187,205,0.8)",
          highlightFill: "rgba(151,187,205,0.75)",
          highlightStroke: "rgba(151,187,205,1)",
          data: [1, 1, 0, 0, 1, 1, 0]
      }
  ]
};

const chartOptions = {
	//Boolean - If there is a stroke on each bar
  barShowStroke : false,

  //Number - Spacing between each of the X value sets
  barValueSpacing : 0,
};

module.exports = React.createClass({

	render: () => {
		return (
			<LineChart data={chartData} options={chartOptions} width="600" height="150"/>
		);
	}
});