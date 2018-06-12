import React, { Component } from 'react';

export default class Menu extends Component {
  state = {
    menu: [
      {
        name: "짜장면",
        select: false
      },
      {
        name: "짬뽕",
        select: false
      },
      {
        name: "볶음밥",
        select: false
      }
    ]
  }
  render() {
    const {menu} = this.state;
    return (
      <div className="menu">
        {
          menu.map(item => {
            return <MenuItem name={item.name}/>
          })
        }
      </div>
    );
  }
}

class MenuItem extends Component {
  render() {
    const {name} = this.props
    return (
      <button>{name}</button>
    )
  }
}