import "./ItemsForm.css";
import React, { Component } from "react";
import image from "../send-button@1X.png";

const nanoid = require("nanoid");

export default class ItemsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      id: "todo" + nanoid(),
      isAchieved: false,
      className: "",
    };
  }

  hendlerPropertyChange = event => {
    this.setState({
      text: event.target.value,
    });
  };

  handleAddClick = event => {
    const { onAdd } = this.props;

    if (typeof onAdd === "function" && this.state.text.length >= 1) {
      onAdd(this.state);
      const idName = "todo" + nanoid();

      this.setState({ text: "", id: idName });
    }
    event.preventDefault();
  };

  render() {
    const { text } = this.state;
    return (
      <form>
        {" "}
        <input
          type="text"
          onChange={this.hendlerPropertyChange}
          value={text}
          placeholder="What needs to be done?"
          autoFocus
        />
        <button className="buttonClass_1" onClick={this.handleAddClick}>
          <img src={image} alt="send" />
        </button>
      </form>
    );
  }
}
