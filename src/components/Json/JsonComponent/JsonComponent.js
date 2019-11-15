import React, { Component } from "react";
import withLoader from "..//..//hoc/withLoader.js";
import "./JsonComponent.css";
class JsonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <section>
        <button> {"<= Назад"}</button>
        <div>
          <button onClick={this.props.onRemove}>Del All</button> <br />
          {this.props.items.map((item, idx) => (
            <div key={idx} className="jsonComponent" id={item.id}>
              {" "}
              email: {item.email} <br /> name: {item.name} <br /> text:{" "}
              {item.body} <br /> <br />{" "}
            </div>
          ))}
          <button onClick={this.props.onSend}>Watch more</button> <br />
        </div>
      </section>
    );
  }
}
export default withLoader(JsonComponent);
