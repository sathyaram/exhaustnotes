import React, { Component } from "react";
import AWSSoundPlayer from '../Player/Player'
import "./Car.scss";

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
            
              {/* <audio controls src={car.carSound} type="audio/mp3">
                Your browser does not support the <code>audio</code> element.
              </audio> */}
            <AWSSoundPlayer
              streamUrl={car.carSound}
              preloadType="metadata" />
            
            <div className="carText">
              <div className="carText-top">
                <div className="carYear">{car.carYear}</div>
              </div>
              <div className="carText-bottom">
                <a className="carModelLink" href="https://www.audiusa.com/models/audi-tt-rs" target="_blank">
                  <div className="carMake">{car.carMake}</div>
                  <div className="carModel">{car.carModel}</div>
                  <div className="carTrim">{car.carTrim}</div>
                </a>
              </div>
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
