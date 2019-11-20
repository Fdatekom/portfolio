import React, { Component } from "react";
import withLoader from "../../hoc/isLoader";
import "./MainContent.css";
import image from "./turkishairlines.jpg";
class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    const data = this.props.data;
    return (
      <div className="aviaMainContent">
        {data.map((item, idx) => (
          <div className="mainCard" key={idx}>
            <div className="priceDiv">
              <div>
                <img src={image} alt="Turkish Airlines ®️" />
              </div>
              <div>
                <button className="buyButton">
                  Купить <br />
                  за {item.price} Р
                </button>
              </div>
            </div>{" "}
            <div className="departure">
              <h3>{item.departure_time}</h3>
              <div>
                {" "}
                {item.origin}, {item.origin_name}
              </div>{" "}
              {item.departure_date}{" "}
            </div>{" "}
            <div className="stopsDiv">
              {" "}
              <span className="stopsInfo">
                {item.stops}{" "}
                <h5 className={item.stops === 0 ? "stops" : "none"}>
                  {" "}
                  пересадок
                </h5>{" "}
                <h5 className={item.stops === 1 ? "stops" : "none"}>
                  {" "}
                  пересадка
                </h5>{" "}
                <h5 className={item.stops >= 2 ? "stops" : "none"}>
                  {" "}
                  пересадки
                </h5>{" "}
                <br />
              </span>{" "}
              <hr /> {/* <img src={image} alt="air" /> */}
            </div>{" "}
            <div className="arrival">
              {" "}
              <h3>{item.arrival_time}</h3>
              <div>
                {item.destination}, {item.destination_name}{" "}
              </div>{" "}
              <div>{item.arrival_date} </div>
            </div>{" "}
          </div>
        ))}
      </div>
    );
  }
}
export default withLoader(MainContent);
