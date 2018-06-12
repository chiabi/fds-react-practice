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
      },
      {
        name: "탕수육",
        select: false
      }
    ]
  }
  choiceMenu = idx => {
    this.setState({
      menu: this.state.menu.map((item, index) => {
        return ({
          name: item.name,
          select: (idx === index ? !item.select : item.select)
        })
      })
    })
  }
  render() {
    const {menu} = this.state;
    const selectMenu = menu.filter(i => i.select)
    return (
      <div className="menu">
        <h2>Menu</h2>
        {
          menu.map((item, idx) => {
            return <MenuItem 
                    key={item.name} 
                    name={item.name} 
                    select={item.select} 
                    onChoiceMenu={e => this.choiceMenu(idx)}
                    />
          })
        }
        <div>
          {
            selectMenu.length ? 
              `${selectMenu.map(item => item.name)}을 선택하셨습니다.` : ''
          }
        </div>
      </div>
    );
  }
}

class MenuItem extends Component {
  render() {
    const {name, select, onChoiceMenu} = this.props
    return (
      <button onClick={onChoiceMenu} className={select ? 'choice': ''}>{name}</button>
    )
  }
}