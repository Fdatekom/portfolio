import React, { Component } from "react";
import withLoader from "..//..//hoc/withLoader.js";
import "./JsonComponent.css";
class JsonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onFilter = propertyName => e => {
    const { addFilter } = this.props;
    if (typeof addFilter == "function") {
      addFilter(propertyName);
    }
  };
  render() {
    return (
      <section>
        <div>
          <button onClick={this.props.onRemove} className='jsonButton'>Сlear</button> <br />
          {this.props.items.map((item, idx) => (
            <div key={idx} className="jsonComponent" id={item.id}>
              {" "}
              <button className="filterButton" onClick={this.onFilter(item.id)}>
                X
              </button>
              <p className="jsonEmail">email: {item.email}</p>{" "}
              <p className="jsonName">name: {item.name}</p>{" "}
              <div className="jsonText">
                {" "}
                text: <br /> <p className="jsonTextBody"> {item.body}</p>{" "}
              </div>
              <br />{" "}
            </div>
          ))}
          <button onClick={this.props.onSend} className='jsonButton'>Watch more</button> <br />
        </div>
      </section>
    );
  }
}
export default withLoader(JsonComponent);
