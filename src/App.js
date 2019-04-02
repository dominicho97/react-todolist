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

  markComplete = () => {
    console.log("From app.js");
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
