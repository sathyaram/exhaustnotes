import React, { Component } from "react";
import Player from '../Player/Player'
import "./Car.scss";
import { InfiniteScroll } from "react-simple-infinite-scroll";
import axios from "axios";
import { ratingDisabled, hasRating } from '../Helpers/rating.helper';

const api = (process.env.REACT_APP_API === undefined) ? 'http://localhost:3500' : process.env.REACT_APP_API;

class Car extends Component {
  
  /**
   * Handles the onClick event of a `stop light`.
   * Saves the current state to the localstorage.
   * @param  {Event} event
   * @param  {string} type
   * @param  {object} car
   */
  onLoveClick = (event, type, car) => {
    event.preventDefault();
    
    // Calculate value
    let rateValue = Number(car[type]);

    const carRatings = localStorage.getItem('carRatings');
    if (carRatings) {
      const hasEqRating = hasRating(car._id, type);

      if (hasEqRating) {
        rateValue--;
        let filteredRatings = JSON.parse(carRatings).filter((rating) => rating.carId !== car._id);
        localStorage.setItem('carRatings', JSON.stringify(filteredRatings));  
      } else {
        rateValue++;
        localStorage.setItem('carRatings', JSON.stringify([...JSON.parse(carRatings), { carId: car._id, type }]));  
      }
    } else {
      let rating = [{
        carId: car._id,
        type: type
      }];
      localStorage.setItem('carRatings', JSON.stringify(rating));
    }

    axios.put(`${api}/api/cars/${car._id}`, {
      type,
      value: rateValue
    }).then(res => {
      this.props.update();
    }).catch(err => {
      console.log(err);
    });
  }

  state = {
    carLoveCount: 46
  }

  carLoveClicked = (e) => {
    e.preventDefault();
    var carBut = document.querySelector('.carButton');
    carBut.classList.toggle('clicked');
  }

  render() {
    let filteredCars
    if (this.props.searchQuery) {
      filteredCars = this.props.contents.filter(car => {
        const query = this.props.searchQuery.toLowerCase() || "";
        const make = car.carMake.toLowerCase();
        const model = car.carModel.toLowerCase();
        const trim = car.carTrim.toLowerCase();

        if (make.indexOf(query) > -1 ||
          model.indexOf(query) > -1 ||
          trim.indexOf(query) > -1) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      filteredCars = this.props.currentPage
    }

    
    return (
      <InfiniteScroll
        throttle={50}
        threshold={50}
        isLoading={this.props.isLoading}
        hasMore={!!this.props.page}
        onLoadMore={this.props.loadMore}
      >
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
                    <div className="carLove">
                      <button 
                        onClick={ (event) => this.onLoveClick(event, 'carRateRed', car) } 
                        disabled={ ratingDisabled(car._id, 'carRateRed') }
                        className="carButton redLight">Red ({ car.carRateRed })
                      </button>
                      <button 
                        onClick={ (event) => this.onLoveClick(event, 'carRateYellow', car) } 
                        disabled={ ratingDisabled(car._id, 'carRateYellow') }
                        className="carButton yellowLight">Yellow ({ car.carRateYellow })
                      </button>
                      <button 
                        onClick={ (event) => this.onLoveClick(event, 'carRateGreen', car) } 
                        disabled={ ratingDisabled(car._id, 'carRateGreen') }
                        className="carButton greenLight">Green ({ car.carRateGreen })
                      </button>
                    </div>
                  </a>
                </div>
                <div className="carLove">
                  <div className="carRating">Rate</div>
                  <div className="trafficLight">
                    <button onClick={this.carLoveClicked} className="carButton redLight"><div className="carLoveCount">{this.state.carLoveCount}</div></button>
                    <button onClick={this.carLoveClicked} className="carButton yellowLight"></button>
                    <button onClick={this.carLoveClicked} className="carButton greenLight"></button>
                  </div>
                </div>
                <div className="carCredit">
                  <a href={car.carSoundCreditLink}>{car.carSoundCredit}</a>
                  <a href={car.carImageCreditLink} className="carLink" target="_blank" rel="noopener noreferrer">{car.carImageCredit}</a>
                </div>
              </div>
            ))
          }
        </div>
      </InfiniteScroll>
    )
  }
}

export default Car;
