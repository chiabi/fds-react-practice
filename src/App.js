import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    number: 0
  }

  incNumber = () => {
    this.setState((prevState) => ({number: prevState.number + 1}))
  }

  render() {
    const {number} = this.state;
    return (
      <div className="App">
        <Counter number={number} onIncNumber={this.incNumber}/>
      </div>
    );
  }
}

class Counter extends Component {
  render() {
    const {number, onIncNumber} = this.props;
    return (
      <div>
        <span>{number}</span>
        <button onClick={onIncNumber}>증가</button>
        <button>감소</button>
      </div>
    )
  }
}

export default App;
