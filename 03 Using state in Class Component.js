class Button extends React.Component {
  constructor (props) {
    super();
    this.state = {counter:0};
  }

	render () {
		return (
			<button>{this.state.counter}</button>
		);
	}
}

ReactDOM.render(<Button />, mountNode);

