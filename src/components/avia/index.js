import React from "react";
import SideMenu from "./sideMenu/sideMenu";
import MainContent from "./MainContent/MainContent";
import Data from "./db.json";
import './index.css'


class Avia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoad: false,
      active: ["all"],
      checkedall: true,
      checked0: false,
      checked1: false,
      checked2: false,
      checked3: false,
    };
  }

  onActive = (stops, propertyName, id, only) => {
    const { active } = this.state;
    if (only) {
      this.setState({
        active: [stops],
        checkedall: false,
        checked0: false,
        checked1: false,
        checked2: false,
        checked3: false,
        [id]: true,
      });
    } else if (active[0] === "all" && stops !== "all") {
      this.setState({
        active: active.filter(val => val !== "all").concat(stops),
        [id]: !propertyName,
        checkedall: false,
      });
    } else if (active.indexOf(stops) !== -1) {
      this.setState({
        active: active.filter(val => val !== stops),
        [id]: !propertyName,
      });
    } else if (stops === "all") {
      this.setState({
        active: ["all"],
        checkedall: true,
        checked0: false,
        checked1: false,
        checked2: false,
        checked3: false,
      });
    } else {
      this.setState({
        active: active.concat(stops),
        [id]: !propertyName,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="avia">
          <SideMenu
            onActive={this.onActive}
            active={this.state.active}
            test={this.state.test}
            checkedall={this.state.checkedall}
            checked0={this.state.checked0}
            checked1={this.state.checked1}
            checked2={this.state.checked2}
            checked3={this.state.checked3}
          />
          <MainContent
            data={this.state.data
              .filter(
                item =>
                  this.state.active.indexOf(item.stops) !== -1 ||
                  this.state.active[0] === "all" ||
                  this.state.active.length === 0
              )
              .sort((a, b) => a.price - b.price)}
            isLoad={this.state.isLoad}
          />
        </div>
      </React.Fragment>
    );
  }

  componentDidMount = () => {
    const isLoad = this.state.isLoad;
    console.log(Data.tickets);
    this.setState({
      data: Data.tickets,
      isLoad: !isLoad,
    });
  };
}

export default Avia;
