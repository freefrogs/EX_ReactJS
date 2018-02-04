var Counter = React.createClass({

	detDefaultProps: function() {
		return {
			myProps: 'initProps'
		};
	},

	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	double: function() {
		this.setState({
			counter: this.state.counter * 2
		});
	},

	mutliplate: function() {
		this.setState({
			counter: this.state.counter * 3
		});
	},

	split: function() {
		this.setState({
			counter: this.state.counter / 2
		});
	},

	componentWillMount() {
		console.log('State before render \ninitial counter state is: ' + this.state.counter);
	},

	render: function() {
		return (
			React.createElement('div', {className: 'box'},
				React.createElement('button', {onClick: this.increment}, 'PLUS'),
				React.createElement('button', {onClick: this.decrement}, 'MINUS'),
				React.createElement('button', {onClick: this.double}, 'DOUBLE'),
				React.createElement('button', {onClick: this.mutliplate}, 'MULTI'),
				React.createElement('button', {onClick: this.split}, 'SPLIT'),
				React.createElement('span', {}, 'COUNTER: ' + this.state.counter)
			)
		);
	},

	componentDidMount() {
		this.state.counter = 10;
		console.log('State after render, the possibility to change initial states \ncurrent counter state is: ' + this.state.counter + ', but we can not see it on webside');
	},

	componentWillReceiveProps(nextProps) {
		console.log('We could update props now, but props stay the same, function will not start\nbecause of that we will not see this text in console');
	},

	shouldComponentUpdate(nextProps, nextState) {
		console.log('We can use false to stop update,\ncounter state is: ' + this.state.counter + '\nWe will see this text every time we will click on one of the buttons');
		return true;
	},

	componentWillUpdate(nextProps, nextState) {
		console.log('Function initiated by shouldComponentUpdate\nState before render \ninitial counter state is: ' + this.state.counter);
	},

	componentDidUpdate(prevProps, prevState) {
		this.state.counter = 12;
		console.log('State after render, the possibility to change initial states \ncurrent counter state is: ' + this.state.counter);
	},

	componentWillUnmount() {
		console.log('We will not start this function, we will not see this in console, it is used to perform cleaning tasks');
	}

});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));