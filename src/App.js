import React, { Component } from 'react';

const List = ({todoList}) => (
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
    return console.log(this.state) ||
      <div>
        <h1>Todo</h1>
        <input type="text" />
        <button>+</button>

      <List todoList={this.state.todoList} />
      </div>;
  }
}

export default App;
