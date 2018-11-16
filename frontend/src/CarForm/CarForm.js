import React, { Component } from "react";

import "./CarForm.css";

class CarForm extends Component {
  render() {
    return (
      <div className="carForm">
      <p>
        Thanks for wanting to contribute to ExhaustNotes! 
        <br/>
        <br/>
        <hr/>
        <br/>
        What we're going to need from you: 
        <ul>
          <li>The Car Make</li>
          <li>The Car Model</li>
          <li>The Car Year</li>
          <li>The Car Trim/Package</li>
          <li>A High Resolution Image of The Car</li>
          <li>A Quality Exhaust Sound Byte from The Car</li>
          <li>The Car Credit</li>
          <li>The Car Link</li>
        </ul>
        
        <p>Send all of the above information, nicely formatted, in an email to 
          <a href="mailto:sathyatheram@gmail.com"> sathyatheram@gmail.com</a>
        </p>
      </p>
      <br/>
      <hr/>
      <p>
      <br/>
           All submissions will be reviewed thoroughly to ensure photo quality is razorsharp, and sound quality is high fidelity.
           <br/><br/>

           <hr/>
         </p>
      </div>
      // <div className="carForm">
      //   <p>
      //     All submissions will be reviewed thoroughly to ensure photo quality is excellent, and sound quality from the mp3 file is high fidelity.
      //     <br/><br/>
      //     Please ensure all fields are filled out. 
      //     <br/><br/>
      //     <hr/>
      //   </p>
      //   <input type="text" name="make" placeholder="Make" />
      //   <input type="text" name="model" placeholder="Model" />

      //   <div className="two-col">
      //     <input type="text" name="year" placeholder="Year" />
      //     <input type="text" name="trim" placeholder="Trim/Package" />
      //   </div>
      //   <div className="two-col">
      //     <div>
      //       <label>High Resolution Photo of Car (1mb, jpg) </label>
      //       <input
      //         type="file"
      //         name="image"
      //         placeholder="Car Image"
      //         accept="image/*"
      //       />
      //     </div>
      //     <div>
      //       <label>Exhaust sound of car (good quality required)</label>
      //       <input type="file" name="sound" placeholder="Car Sound" />
      //     </div>
      //   </div>
      //   <div className="two-col">
      //     <input type="text" name="credit" placeholder="Credit" />
      //     <input type="text" name="link" placeholder="Link" />
      //   </div>
      //   <textarea placeholder="Write a message" name="message" />
      //   <button type="submit">Submit</button>
      // </div>
    );
  }
}

export default CarForm;
