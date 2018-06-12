import React, { Component } from 'react';

export default class Sum extends Component {
  state = {
    number1: 3,
    number2: 4,
    result: 7
  }
  changeNum1 = e => {
    const num = parseInt(e.target.value);
    this.setState({
      number1: num,
      result: num + this.state.number2
    })
  }
  changeNum2 = e => {
    const num = parseInt(e.target.value);
    this.setState({
      number2: num,
      result: num + this.state.number1
    })
  }
  render() {
    const {number1, number2, result} = this.state
    return (
      <div className="sum">
        <SumInput number={number1} onChangeNumber={this.changeNum1}/>
        + 
        <SumInput number={number2} onChangeNumber={this.changeNum2}/>
        =
        <div>{result}</div>
      </div>
    );
  }
}

class SumInput extends Component {
  render() {
    const {number, onChangeNumber} = this.props;
    return (
      <input type="number" value={number} onChange={onChangeNumber}/>
    )
  }
}