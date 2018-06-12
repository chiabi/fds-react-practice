import React, { Component } from 'react';

let count = 1;
export default class Todo extends Component {
  state = {
    todos: [
      {
        id: count++,
        body: 'React 공부',
        complete: false
      },
      {
        id: count++,
        body: 'Redux 공부',
        complete: false
      }
    ],
    newBody: ''
  }

  updateList = async () => {
    const {todos, newBody} = this.state;
    if(newBody) {
      this.setState({
        todos: [
          ...todos,
          {
            id: count++,
            body: newBody,
            complete: false
          }
        ],
        newBody: ''
      })
    }
  }

  updateNewBody = e => {
    this.setState({
      newBody: e.target.value
    })
  }

  changeComplete = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id) {
          item.complete = true;
          return item;
        }
        return item;
      })
    })
  }

  render() {
    const {todos, newBody} = this.state;
    return (
      <div>
        <TodoForm
          newBody={newBody}
          onUpdateNewBody={this.updateNewBody}
          onUpdateList={this.updateList}
          />
        <TodoList 
          todos={todos}
          changeComplete={this.changeComplete}
        />
      </div>
    )
  }
}

class TodoForm extends Component {
  render() {
    const {newBody, onUpdateNewBody, onUpdateList} = this.props
    return (
      <div>
        <button onClick={this.handleButtonClick}>추가하기</button>
      </div>
    )
  }
}
class TodoList extends Component {
  render() {
    const {todos, changeComplete} = this.props;
    return (
      <ul className="todo__list">
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id} 
            body={todo.body}
            complete={todo.complete}
            onChangeComplete={changeComplete}
          />
        )
      })}
      </ul>
    )   
  }
}

class TodoItem extends Component {
  render () {
    const {id, body, complete, onChangeComplete} = this.props;
    return (
      <li className={`todo__item ${complete && 'todo__item--complete'}`}>
        {body}
        <button onClick={e => onChangeComplete(id)}>완료</button>
        <button>삭제</button>
      </li>
    )
  }
}