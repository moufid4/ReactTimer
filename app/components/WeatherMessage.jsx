var React = require('react');

var WeatherMessage = React.createClass({
	render: function() {
		var {temp, city} = this.props;
		// console.log(city)
		return (
			<h3>It is {temp} in {city}.</h3>
		)
	}
});

module.exports = WeatherMessage;