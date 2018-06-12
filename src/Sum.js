import React, { Component } from 'react';

export default class Sum extends Component {
  state = {
    number1: 3,
    number2: 4,
    // 다른 상태로부터 계산될 수 있는 것은 상태에 두지 않는 것이 좋다.
    // result: 7
  }
  changeNum1 = e => {
    this.setState({
      number1: parseInt(e.target.value)
    })
  }
  changeNum2 = e => {
    this.setState({
      number2: parseInt(e.target.value),
    })
  }
  render() {
    const {number1, number2} = this.state
    const result = number1 + number2;
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