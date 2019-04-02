import React, { Component } from "react";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        Completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        Completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        Completed: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
