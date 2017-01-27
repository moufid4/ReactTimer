var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');


var firstName = 'Moufid';
var message = 'This is a new message!';

ReactDOM.render(
	<Greeter name={firstName} message={message}/>,
	document.getElementById('app')
);