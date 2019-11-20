import React, { Component } from "react";
import withLoader from "..//..//hoc/withLoader.js";
import "./JsonComponent.css";
import avatar from "./icon.png@1X.png";
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
        <div style={{ fontSize: "10pt" }}>
          Асинхронная подгрузка json файла с{" "}
          <a href="https://jsonplaceholder.typicode.com/comments">
            jsonplaceholder
          </a>
        </div>
        <div className="json_container">
          {this.props.items.map((item, idx) => (
            <div key={idx} className="jsonComponent" id={item.id}>
              {" "}
              <img src={avatar} alt="avatar" className="avatar" />
              <button className="filterButton" onClick={this.onFilter(item.id)}>
                X
              </button>
              <p className="jsonEmail">
                <i class="fa fa-envelope-open-o" aria-hidden="true"></i>{" "}
                <strong>email:</strong> {item.email}
              </p>{" "}
              <p className="jsonName">
                {" "}
                <i class="fa fa-user-circle" aria-hidden="true"></i>{" "}
                <strong>name:</strong> {item.name}
              </p>{" "}
              <hr className="hr_json" />
              <div className="jsonText">
                {" "}
                <p className="jsonTextBody"> {item.body}</p>{" "}
              </div>
              <br />{" "}
            </div>
          ))}
          <button onClick={this.props.onSend} className="jsonButton json_more">
            Watch more
          </button>{" "}
          <br />
          <button onClick={this.props.onRemove} className="jsonButton">
            Сlear
          </button>{" "}
          <br />
        </div>
      </section>
    );
  }
}
export default withLoader(JsonComponent);
