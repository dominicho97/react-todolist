import React, { Component } from "react";
import Proptypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: 0,
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" />
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

//Proptypes
Todoitem.propTypes = {
  todo: Proptypes.object.isRequired
};

export default Todoitem;
