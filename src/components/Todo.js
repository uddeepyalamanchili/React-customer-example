import React from 'react';

export default class TodoApp extends React.Component {
  state = { items: [], text: '',sum :0  };
  constructor(_props) {
    super(_props);  
    //Another approach to handle this 
    // this.handleChange = this.handleChange.bind(this); // line handles this pointer
    this.handleSubmit = this.handleSubmit.bind(this); // line handles this pointer
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <h4>Sum is :{this.state.sum}</h4>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    /*if (!this.state.name.length) { //if the string is a null string
      return;
    }*/
    if (!isNaN(this.state.text)) { //checking the string of the entered text
      var tempsum = parseInt(this.state.text);
    }
    else{
      var tempsum=0;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      sum: prevState.sum +tempsum,
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
