import React, { Component } from "react";
import Player from '../Player/Player'
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
            className={`car ${car.carMake.toLowerCase()} ${car.carYear} `}
            id={car.carModel.toLowerCase()}
            style={{ backgroundImage: `url(${car.carImage})` }}
          >   
            <Player
              streamUrl={car.carSound}
              preloadType="metadata" /> 
            <div className="carText">
                <div className="carYear">{car.carYear}</div>
                <a className="carModelLink" href={car.carLink} target="_blank" rel="noopener noreferrer">
                  <div className="carMake">{car.carMake}</div>
                  <div className="carModel">{car.carModel}</div>
                  <div className="carTrim">{car.carTrim}</div>
                </a>
            </div>
            <div className="carCredit">
              <a href={car.carSoundCreditLink}>{car.carSoundCredit}</a>
              <a href={car.carImageCreditLink} className="carLink" target="_blank" rel="noopener noreferrer">{car.carImageCredit}</a>
            </div>
          </div>
        ))
      }
      </div>
    )
  }
}

export default Car;
