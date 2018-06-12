import React, { Component } from 'react';
import './App.css';

let count = 1;

class App extends Component {

  formRef = React.createRef();

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
  }

  handleNewTodo = newTodoBody => {
    const newTodo = {
      id: count++,
      body: newTodoBody,
      complete: false
    };
    this.setState({
      todos: [
        ...this.state.todos,
        newTodo
      ]
    });
  }

  render() {
    return (
      <div>
        <TodoForm ref={this.formRef} onAdd={this.handleNewTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }

  componentDidMount() {
    console.log(this.formRef.current)
  }
}

class TodoForm extends Component {

  inputRef = React.createRef();
  state = {
    newTodoBody: ''
  }
  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    })
  }
  handleButtonClick = e => {
    this.props.onAdd(this.state.newTodoBody);
    this.setState({
      newTodoBody: ''
    })
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    const {newTodoBody} = this.state;
    return (
      <div>
        <input ref={this.inputRef} type="text" value={newTodoBody} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>추가</button>
      </div>
    )
  }
}

class TodoList extends Component {
  render() {
    const {todos} = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.body}</li>
        ))}
      </ul>
    )
  }
}

export default App;