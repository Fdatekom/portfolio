import React, { Component, Fragment } from "react";
import JsonComponent from "./JsonComponent/JsonComponent";
import Footer from "../footer/footer";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 1,
      isLoad: false,
      filterArray: [],
    };
  }

  renderMoreItems = () => {
    let { count } = this.state;
    count += 1;
    this.setState({
      count: count,
    });
  };

  removeAllItems = () => {
    const old_count=this.state.count
    const count = old_count-1;
    this.setState({
      count: count,
    });
  };

  addFilter = propertyName => {
    const { filterArray } = this.state;
    this.setState({
      filterArray: filterArray.concat(propertyName),
    });
  };

  render() {
    return (
      <Fragment>
          <JsonComponent
            items={this.state.data.filter((item, idx) => {
              if (
                item.postId <= this.state.count &&
                this.state.filterArray.indexOf(item.id) === -1
              ) {
                return item;
              }
            })}
            addFilter={this.addFilter}
            onSend={this.renderMoreItems}
            onRemove={this.removeAllItems}
            isLoad={this.state.isLoad}
          />
        
        <Footer />
      </Fragment>
    );
  }

  componentDidMount = () => {
    const isLoad = this.state.isLoad;
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        res.json().then(data => {
          this.setState({
            data: data,
            isLoad: !isLoad,
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
