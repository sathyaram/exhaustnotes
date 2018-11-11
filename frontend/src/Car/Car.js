import React, { Component } from "react";
import "./Car.css";

class Car extends Component {
  render() {
    console.log(this.props.contents);
    const cars = this.props.contents.map(car => {
      return (
        <div key={car._id} className="car" style={{backgroundImage: `url(${car.carImage})`}}>
          
          <div className="carSound">
            <audio
    controls
    src={car.carSound}
    type="audio/mp3">
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
            <a href={car.carLink} className="carLink">{car.carCredit}</a>
          </div>
        </div>
      )
    })
    return (
      <div className="carGrid">
        {cars}
      </div>
    );
  }
}

export default Car;
