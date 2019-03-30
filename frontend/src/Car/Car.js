import React, { Component } from "react";
import Player from '../Player/Player'
import Slider from "react-slick";
import "./Car.scss";

class Car extends Component {

  generateSlideContent(imageArray, id) {
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const sliderContent = imageArray.map(image => {
      return (
      <div className="carSlide" >
        <div class="carImage" style={{ backgroundImage: `url(${image.imagePath})` }}>
          {/* <img src={image.imagePath} /> */}
        </div>
    </div>
    )});
    return (
      <Slider {...settings} key={id}>
        { sliderContent }
      </Slider>
    )
  }

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
            style={{ backgroundImage: `url(${car.carImages[0].imagePath})` }}
          >
          {/* {this.generateSlideContent(car.carImages, car._id)} */}
              {/* <audio controls src={car.carSound} type="audio/mp3">
                Your browser does not support the <code>audio</code> element.
              </audio> */}
              
            <Player
              streamUrl={car.carSound}
              preloadType="metadata" />
            
            <div className="carText">
                <div className="carYear">{car.carYear}</div>
                <a className="carModelLink" href="https://www.audiusa.com/models/audi-tt-rs" target="_blank">
                  <div className="carMake">{car.carMake}</div>
                  <div className="carModel">{car.carModel}</div>
                  <div className="carTrim">{car.carTrim}</div>
                </a>
            </div>
            <div className="carCredit">
              <a href={car.carImages[0].creditLink}>{car.carImages[0].creditText}</a>
              <a href={car.carLink} className="carLink" target="_blank">
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
