import "./Items.css";
import React, { Component } from "react";
import ToDoItem from "..//ToDoItem/ToDoItem.js";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const items = this.props.items;
    return (
      <div className="todo_container">
        {items.map((item, idx) => (
          <ToDoItem
            text={item.text}
            id={item.id}
            isAchieved={item.isAchieved}
            key={idx}
            onChange={this.props.onChange}
            onRemove={this.props.onRemove}
            onAchieved={this.props.onAchieved}
            isEdit={this.props.isEdit}
            onEdit={this.props.onEdit}
            alertInput={this.props.alertInput}
            className={item.className}
          />
        ))}
      </div>
    );
  }
}
