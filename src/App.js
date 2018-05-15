import React, { Component } from 'react';

const List = ({todoList}) => (
  <ul>
    Todo List
    {todoList.map((todo, index) => {
      return (
        <li key={index} onClick={this.listClick}>
          {todo.done ? <s>{todo.item} </s> : todo.item}
        </li>
      );
    })}
  </ul>
);

let initialValue = {
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

  listClick(event) {
    console.log(event.target);
  }

  render() {
    return console.log(this.state) || <List todoList={this.state.todoList} />;
  }
}

export default App;
