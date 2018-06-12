import React, { Component } from 'react';

export default class Menu2 extends Component {
  render() {
    return (
      <div>
        <MenuSelector menus={['짜장면', '짬뽕', '볶음밥']}/>
      </div>
    )
  }
}

class MenuSelector extends Component {
  state = {
    menu: null
  }
  render() {
    return (
      <div>
        {this.props.menus.map(item => (
          <button onClick={e => this.setState({menu: item})}>{item}</button>
        ))}
        <div>{this.state.menu && `${this.state.menu} 을 선택하셨습니다.`}</div>
      </div>
    )
  }
}