import React, { Component } from 'react';
// import axios from 'axios';

// const API_URL=''
// const todoAPI = axios.create({
//   baseURL: API_URL
// })

let count = 0
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

  // async componentDidMount() {
  //   const res = await todoAPI.get('/todos');
  //   this.setState({
  //     todos: res.data
  //   })
  // }

  // updateList = async () => {
  //   const todosId = this.state.todos.map(todo => todo.id);
  //   const newBody = this.state.newBody;
  //   if(this.state.newBody) {
  //     this.setState({
  //       todos: [
  //         ...this.state.todos,
  //         {
  //           id: Math.max(...todosId) + 1,
  //           body: newBody,
  //           complete: false
  //         }
  //       ],
  //       newBody: ''
  //     })
  //     await todoAPI.post('/todos', {
  //       body: newBody, 
  //       complete: false
  //     })
  //     const res = await todoAPI.get('/todos');
  //     this.setState({
  //       todos: res.data
  //     })
  //   }
  // }

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
        <input type="text" placeholder="할일을 입력하세요" value={newBody} onChange={onUpdateNewBody}/>
        <button onClick={onUpdateList}>추가하기</button>
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
      <div className={`todo__item ${complete && 'todo__item--complete'}`}>
        {body}
        <button onClick={e => onChangeComplete(id)}>완료</button>
        <button>삭제</button>
      </div>
    )
  }
}