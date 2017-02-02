var React = require('react');

// var WeatherMessage = React.createClass({
// 	render: function() {
// 		var {temp, city} = this.props;
		
// 		return (
// 			<h3>It is {temp} in {city}.</h3>
// 		)
// 	}
// });

var WeatherMessage = (props) => {
	var {temp, city} = props;
	
	return (
		<h3>It is {temp} in {city}.</h3>
	)
}

module.exports = WeatherMessage;