var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			city: 'Miami',
			temp: 30
		}
	},
	handleSearch: function(city) {

		this.setState({
			city: city,
			temp: 23
		});
	},
	render: function() {
		var {temp, city} = this.state;

		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				<WeatherMessage temp={temp} city={city}/>
			</div>
		)
	}
});

module.exports = Weather;