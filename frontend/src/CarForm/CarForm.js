import React, { Component } from "react";

import "./CarForm.css";

class CarForm extends Component {
  render() {
    return (
      <div className="carForm">
        <p>
          All submissions will be reviewed thoroughly to ensure photo quality is excellent, and sound quality from the mp3 file is high fidelity.
          <br/><br/>
          Please ensure all fields are filled out. 
          <br/><br/>
          <hr/>
        </p>
        <input type="text" name="make" placeholder="Make" />
        <input type="text" name="model" placeholder="Model" />

        <div className="two-col">
          <input type="text" name="year" placeholder="Year" />
          <input type="text" name="trim" placeholder="Trim/Package" />
        </div>
        <div className="two-col">
          <div>
            <label>High Resolution Photo of Car (1mb, jpg) </label>
            <input
              type="file"
              name="image"
              placeholder="Car Image"
              accept="image/*"
            />
          </div>
          <div>
            <label>Exhaust sound of car (good quality required)</label>
            <input type="file" name="sound" placeholder="Car Sound" />
          </div>
        </div>
        <div className="two-col">
          <input type="text" name="credit" placeholder="Credit" />
          <input type="text" name="link" placeholder="Link" />
        </div>
        <textarea placeholder="Write a message" name="message" />
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default CarForm;
