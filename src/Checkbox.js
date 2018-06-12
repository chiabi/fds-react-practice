import React, { Component } from 'react';

const CHECK_NUM = 5;
const noCheckArray = new Array(CHECK_NUM).fill(false)
export default class Checkbox extends Component {
  state = {
    checks: noCheckArray
  }
  changeCheck = eIdx => {
    this.setState({
      checks: this.state.checks.map((item, idx) => {
        return idx === eIdx ? !item : item
      })
    })
  }
  render() {
    return (
      <div className="checks">
        {this.state.checks.map((item, idx) => {
          return (
            <span 
              className={`check ${item ? 'checked' : ''}`} 
              key={idx} 
              onClick={e => this.changeCheck(idx)}
            >{item ? 'X' : 'O'}</span>
          )
        })}
      </div>
    );
  }
}