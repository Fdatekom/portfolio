import React, { Component } from "react";
import "./ToDoItem.css";

export default class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      newText: "",
      className: "notAchived",
    };
  }

  hendlerPropertyChange = event => {
    this.setState({
      newText: event.target.value,
    });
  };

  onDoubleClick = event => {
    const { isEdit } = this.state.isEdit;
    const { text, onEdit, alertInput } = this.props;
    if (!this.props.isAchieved && !this.props.isEdit) {
      if (typeof onEdit === "function") {
        onEdit(event.target.id);
      } else {
      }
      this.setState({
        isEdit: !isEdit,
        newText: text,
      });
    } else {
      if (typeof alertInput === "function") {
        alertInput(event.target.id);
      }
    }
  };

  onKeyDown = event => {
    const { onChange, onEdit } = this.props;

    if (
      event.keyCode === 13 &&
      typeof onChange === "function" &&
      this.state.newText.length >= 1 &&
      typeof onEdit === "function"
    ) {
      const { isEdit } = this.state;
      this.setState({
        isEdit: !isEdit,
      });
      onChange(this.state.newText, event.target.id);
      onEdit();
      this.setState({ newText: "" });
    } else {
    }
  };

  onClickRemove = (event, id) => {
    const { onRemove } = this.props;
    if (typeof onRemove === "function") {
      onRemove(id);
    }
  };

  checkboxChange = event => {
    const onAchieved = this.props.onAchieved;
    if (typeof onAchieved === "function") {
      onAchieved(this.props.id, this.props.isAchieved);
    }
  };

  render() {
    const { text, id, idx, className } = this.props;
    const { newText } = this.state;
    return (
      <div className="todo_Items">
        {this.state.isEdit ? (
          <input
            id={id}
            key={idx}
            onKeyDown={this.onKeyDown}
            value={newText}
            onChange={this.hendlerPropertyChange}
            autoFocus
            className={className + ' todoDivItem'}
          />
        ) : (
          <div
            id={id}
            key={idx}
            onDoubleClick={this.onDoubleClick}
            className={this.props.isAchieved ? "achived todoDivItem " : "todoDivItem notAchived"}
          >
            <input
              type="checkbox"
              className="checkbox_item"
              onChange={this.checkboxChange}
              checked={this.props.isAchieved}
            />{" "}
            <div className='textDivTodo'><p>{text}{" "}</p></div>
            <button
              className="button_remove"
              onClick={() => this.props.onRemove(id)}
            >
              X
            </button>
          </div>
        )}
      </div>
    );
  }
}
