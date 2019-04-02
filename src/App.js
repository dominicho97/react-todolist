import React, { Component } from "react";
import Header from "./components/layout/header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        Completed: false
      },
      {
        id: uuid.v4(),
        title: "Dinner with wife",
        Completed: false
      },
      {
        id: uuid.v4(),
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

  //AddTodo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      Completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container" />
        <Header />
        <AddTodo addTodo={this.addTodo} />
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
