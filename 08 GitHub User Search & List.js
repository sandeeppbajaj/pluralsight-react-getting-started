const Card = (props) => {
	return (
  	<div style={{marginTop: 10}}>
  	  <img width="75" src={props.avatar_url} alt=""/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div>{props.name}</div>
        <div>{props.company}</div>
      </div>
  	</div>
  );
}

const CardList = (props) => {
	return (
  	<div>
  	  {props.cards.map(card => <Card key={card.id} {...card}/>)}
  	</div>
  );
};

class Form extends React.Component {
	state = {username : ''}
	handleSubmit = (event) => {
  	event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(resp => {
    	this.props.onSubmit(resp.data);
    })
  }

	render () {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input type="text" 
        				value={this.state.username}
                onChange={(event)=> {this.setState ({username: event.target.value}) }}
        				placeholder="Github username" required/>
        <button type="submit">Search</button>
    	</form>
    );
  }
}

class App extends React.Component {
  
	state = {
  	cards: [
      {
        name: "Sandeep Bajaj",
        avatar_url: "https://avatars1.githubusercontent.com/u/6015773?v=4",
        company: ""
      }
    ]
  };
  
  addNewCard = (cardInfo) => {
  	this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }));
  }

	render () {
  	return (
    	<div>
    	  <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
    	</div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
