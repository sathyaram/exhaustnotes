import React, { Component } from "react";

import "./CarForm.css";

class CarForm extends Component {
  render() {
    return (
      <div className="carForm">
        <div className="two-col">
          <input type="text" name="make" placeholder="Make" />
          <input type="text" name="model" placeholder="Model" />
        </div>
        <div className="two-col">
          <input type="text" name="year" placeholder="Year" />
          <input type="text" name="trim" placeholder="Trim" />
        </div>
        <div className="two-col">
        <label>High Res Photo of Car</label>
          <input
            type="file"
            name="image"
            placeholder="Car Image"
            accept="image/*"
          />
          <label>Exhaust sound of car (good quality required)</label>
          <input type="file" name="sound" placeholder="Car Sound" />
        </div>
        <div className="two-col">
          <input type="text" name="credit" placeholder="Credit" />
          <input type="text" name="link" placeholder="Link" />
        </div>
        <button type="submit">Submit</button>
      </div>
    );
  }

}

export default CarForm;
