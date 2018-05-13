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

  listClick(event) {
    console.log(event.target);
  }

  render() {
    return (
      console.log(this.state) || (
        <ul>
          Todo List
          {this.state.todoList.map((todo, index) => {
            return (
              <li key={index} onClick={this.listClick}>
                {todo.done ? <s>{todo.item} </s> : todo.item}
              </li>
            );
          })}
        </ul>
      )
    );
  }
}

export default App;
