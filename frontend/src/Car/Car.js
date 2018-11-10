import React, { Component } from "react";
import "./Car.css";

class Car extends Component {
  render() {
    return (
      <div className="car-wrapper">
      <div className="car first">
        <div className="carSound">
          <i class="fas fa-volume-up" />
        </div>
        <div className="carText">
        <div className="carYear">2018</div>
        <div className="carMake">Ford</div>
        <div className="carModel">Mustang </div>
        <div className="carTrim">Shelby GT350</div>
        </div>
        <div className="carCredit">
          <div className="carLink">@carlife-style</div>
        </div>
      </div>

      <div className="car second">
      <div className="carSound">
        <i class="fas fa-volume-up" />
      </div>
      <div className="carText">
      <div className="carYear">2016</div>
      <div className="carMake">Audi</div>
      <div className="carModel">TT </div>
      <div className="carTrim">RS</div>
      </div>
      <div className="carCredit">
        <div className="carLink">@carlife-style</div>
      </div>
    </div>

    <div className="car third">
    <div className="carSound">
      <i class="fas fa-volume-up" />
    </div>
    <div className="carText">
    <div className="carYear">2019</div>
    <div className="carMake">Porsche</div>
    <div className="carModel">Panamara </div>
    <div className="carTrim">Turbo</div>
    </div>
    <div className="carCredit">
      <div className="carLink">@carlife-style</div>
    </div>
  </div>
  </div>
    );
  }
}

export default Car;
