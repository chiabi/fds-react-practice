import React, { Component } from 'react';

export default class Menu2 extends Component {
  state = {
    menus: ['짜장면', '짬뽕', '볶음밥', '탕수육', '유린기', '라조기'],
    menu: null
  }
  updateMenu = item => {
    this.setState({
      menu: item
    })
  }
  render() {
    return (
      <div class="menu-selector">
        <MenuSelector 
          menus={this.state.menus}
          menu={this.state.menu}
          onUpdateMenu={this.updateMenu}
        />
      </div>
    )
  }
}

class MenuSelector extends Component {
  render() {
    const {menus, menu, onUpdateMenu} = this.props;
    return (
      <div>
        {menus.map(item => (
          <button onClick={e => onUpdateMenu(item)}>{item}</button>
        ))}
        <div>{menu && `${menu} 을 선택하셨습니다.`}</div>
      </div>
    )
  }
}