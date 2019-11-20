import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Head.css";
import image1 from "./home.svg";
import image2 from "./todo.svg";
import image3 from "./json.svg";
import image4 from "./avia.svg";
export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <div className="header_container">
          <Link to="/">Home </Link>
          <img className="header_icon" src={image1} alt="home" />
        </div>
        <div className="header_container">
          <Link to="/todo">ToDo</Link>{" "}
          <img className="header_icon" src={image2} alt="todo" />
        </div>
        <div className="header_container">
          <Link to="/json"> Json</Link>{" "}
          <img className="header_icon" src={image3} alt="json" />
        </div>
        <div className="header_container">
          <Link to="/avia"> Test Aviasales</Link>{" "}
          <img className="header_icon" src={image4} alt="avia" />
        </div>
      </div>
    );
  }
}
