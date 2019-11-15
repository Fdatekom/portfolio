import React, { Component } from "react";
import "./sideMenu.css";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = (propertyName, stops, id, only) => e => {
    const { onActive } = this.props;

    if (typeof onActive === "function") {
      onActive(stops, propertyName, id, only);
    }
  };

  render() {
    const { checkedall, checked0, checked1, checked2, checked3 } = this.props;
    return (
      <fieldset className="sideMenu">
        <ul>
          Количество пересадок :
          <li>
            <input
              type="checkbox"
              checked={checkedall}
              onChange={this.onChange(checkedall, "all", "checkedall")}
            />{" "}
            <label htmlFor="all">Все</label>
            <button 
              onClick={this.onChange(checkedall, "all", "checkedall", true)}
            >
              {" "}
              ТОЛЬКО
            </button >
          </li>
          <li>
            <input
              type="checkbox"
              checked={checked0}
              onChange={this.onChange(checked0, 0, "checked0")}
            />
            <label htmlFor="0">Без пересадок</label>
            <button  onClick={this.onChange(checked0, 0, "checked0", true)}>
              {" "}
              ТОЛЬКО
            </button >
          </li>
          <li>
            <input
              type="checkbox"
              checked={checked1}
              onChange={this.onChange(checked1, 1, "checked1")}
            />
            1<label htmlFor="1">пересадка</label>
            <button  onClick={this.onChange(checked1, 1, "checked1", true)}>
              {" "}
              ТОЛЬКО
            </button >
          </li>
          <li>
            <input
              type="checkbox"
              checked={checked2}
              onChange={this.onChange(checked2, 2, "checked2")}
            />
            2<label htmlFor="2">пересадки</label>
            <button  onClick={this.onChange(checked2, 2, "checked2", true)}>
              {" "}
              ТОЛЬКО
            </button >
          </li>
          <li>
            <input
              type="checkbox"
              checked={checked3}
              onChange={this.onChange(checked3, 3, "checked3")}
            />
            3<label htmlFor="3">пересадки</label>
            <button  onClick={this.onChange(checked3, 3, "checked3", true)}>
              {" "}
              ТОЛЬКО
            </button >
          </li>
        </ul>
      </fieldset>
    );
  }
}
