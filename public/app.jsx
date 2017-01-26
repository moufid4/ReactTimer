var Greeter = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello Moufid!</h1>			
			</div>
		);
	}
});

ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
);