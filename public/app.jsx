var Greeter = React.createClass({
	render: function() {
		var name = this.props.name;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>This is from React component.</p>			
			</div>
		);
	}
});

ReactDOM.render(
	<Greeter name="Moufid"/>,
	document.getElementById('app')
);