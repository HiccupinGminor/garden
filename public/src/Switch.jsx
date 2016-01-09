"use strict";

const React = require('react'),
			classNames = require('classnames'),
			Data = require('./Data');

module.exports = React.createClass({

	getInitialState: function() {
    return {
       isOn: false,
    };
	},

	toggle: function() {
		this.setState({isOn: !this.state.isOn});
	},

	componentDidMount: function() {
		const that = this;

		function listener () {
		  const newState = JSON.parse(this.response);

		  that.setState({
		  	isOn: newState.lightsOn
		  });
		};

		function load() {
			Data.request("GET", "api/v1/system", listener);
		}

		load();
	},

  render: function() {
  	const toggleClasses = classNames('switch', {'switch-on': this.state.isOn}),
  				statusText = this.state.isOn ? 'On' : 'Off';

    return (
			<div className={toggleClasses}>
			  <div id="cmn-toggle-1" className="cmn-toggle cmn-toggle-round" type="checkbox"></div>
			  <div className="sl" onClick={this.toggle}></div>
			  <div className="status on-off-status">
				  <span>{statusText}</span>
			  </div>
			</div>
    );
  }
});