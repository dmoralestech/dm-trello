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
    return <div className="App" />;
  }
}

export default App;
