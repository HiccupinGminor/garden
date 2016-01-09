"use strict";

const React = require('react'),
			classNames = require('classnames');

module.exports = React.createClass({

	getInitialState: function() {
    return {
       isOn: false,
    };
	},

	toggle: function() {
		this.setState({isOn: !this.state.isOn});
	},

  render: function() {
  	const toggleClasses = classNames('switch', {'switch-on': this.state.isOn});

    return (
			<div className={toggleClasses}>
			  <div id="cmn-toggle-1" className="cmn-toggle cmn-toggle-round" type="checkbox"></div>
			  <div className="label-yo" onClick={this.toggle}></div>
			</div>
    );
  }
});

