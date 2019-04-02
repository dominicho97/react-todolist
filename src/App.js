import React, { Component } from "react";
import Header from "./components/layout/header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

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

  //Toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.Completed = !todo.Completed;
        }
        return todo;
      })
    });
  };

  //Delete todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container" />
        <Header />
        <AddTodo />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
