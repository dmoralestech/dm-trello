import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    return  console.log(this.state) ||  (
      <ul>
        Todo List
        {this.state.todoList.map(todo => {
          return <li>{todo.item}</li>;
        })}
      </ul>
    );
  }
}

export default App;
