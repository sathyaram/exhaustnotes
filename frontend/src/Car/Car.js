import React, { Component } from "react";
import "./Car.css";

class Car extends Component {
  render() {
    const filteredCars = this.props.contents.filter(car => {
      const query = this.props.searchQuery.toLowerCase() || "";
      const make = car.carMake.toLowerCase();
      const model = car.carModel.toLowerCase();
      const trim = car.carTrim.toLowerCase();
    

        if (make.indexOf(query) > -1 ||
        model.indexOf(query) > -1 ||
        trim.indexOf(query) > -1 ) {
          return true;
        } else {
          return false;
        }
    });

    return (
      <div className="carGrid">
      {
        filteredCars.map(car => (
          <div
            key={car._id}
            className="car"
            style={{ backgroundImage: `url(${car.carImage})` }}
          >
            <div className="carSound">
              <audio controls src={car.carSound} type="audio/mp3">
                Your browser does not support the <code>audio</code> element.
              </audio>
            </div>
            <div className="carText">
              <div className="carYear">{car.carYear}</div>
              <div className="carMake">{car.carMake}</div>
              <div className="carModel">{car.carModel}</div>
              <div className="carTrim">{car.carTrim}</div>
            </div>
            <div className="carCredit">
              <a href={car.carLink} className="carLink">
                {car.carCredit}
              </a>
            </div>
          </div>
        ))
      }
      </div>
    )
  }
}

export default Car;
