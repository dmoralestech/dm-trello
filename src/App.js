import React, { Component } from 'react';
import TestImage from './test.png';

const List = ({ todoList }) => (
  <ul>
    {todoList.map((todo, index) => {
      return (
        <li key={index} onClick={this.listClick}>
          {todo.done ? <s>{todo.item} </s> : todo.item}
          <button>x</button>
        </li>
      );
    })}
  </ul>
);

let initialValue = {
  item: '',
  todoList: [
    {
      item: 'step 1',
      done: true,
    },
    {
      item: 'step 2',
      done: false,
    },
  ],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialValue;
  }

  listClick = event => {
    console.log(event.target);
  };

  onChange = event => {
    this.setState({ item: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      item: '',
      todoList: [
        ...this.state.todoList,
        { item: this.state.item, done: false },
      ],
    });
  };

  render() {
    return (
      <div>
        <img src={TestImage} alt="" />
        <form onSubmit={this.onSubmit}>
          <h1>Todo</h1>
          <input type="text" value={this.state.item} onChange={this.onChange} />
          <button>+</button>
          <List todoList={this.state.todoList} />
        </form>
      </div>
    );
  }
}

export default App;
