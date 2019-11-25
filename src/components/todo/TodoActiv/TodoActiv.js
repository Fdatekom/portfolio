import React, { Component } from "react";
import "./TodoActiv.css";
import image from "../filter_filters_funnel_list_navigation_sort_sorting_icon_123212@1X.png";
export default class TodoActiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
    };
  }
  onActiveAll = propertyName => event => {
    const onActive = this.props.onActive;
    if (typeof onActive === "function") {
      onActive(propertyName);

      this.setState({ active: propertyName });
    }
  };

  render() {
    return (
      <div className="TodoActive">
        <img src={image} alt="settings" /> Show:
        <button
          className="button_filter_todo"
          onClick={this.onActiveAll("all")}
        >
          All
        </button>
        <button
          className="button_filter_todo"
          onClick={this.onActiveAll("active")}
        >
          Active
        </button>
        <button
          className="button_filter_todo"
          onClick={this.onActiveAll("complited")}
        >
          Compited
        </button>{" "}
        <br />

       
      </div>
    );
  }
}
