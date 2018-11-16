import React, { Component } from 'react';

import './Faq.css'

class Faq extends Component {
  render() {
    return (
      <div className="faq">
      <details>
            <summary>What is ExhaustNotes?</summary>
            <p>This is a website to centralize a collection of car exhaust noises. You'll be able to
             browse the different roars a car makes when it revs its engines
              and distinguish it by appearence or brand. 
            </p>
          </details>
        <details>
            <summary>What is this tool made with?</summary>
            <p>React, Express, Mongooose, Axios, HTML/CSS, and mLab/Heroku.</p>
          </details>
          <details>
            <summary>How can I interact with it?</summary>
            <p>The API is open, meaning you can access it at any time and use the information 
              about each car however you want. You're provided with the car's sound byte, and 
              all the car's other information.
            </p>
            </details>
            <details>
            <summary>Can I submit my car's sound?</summary>
            <p>Absolutely. Just click 'Submit a Sound' at the top and email me your cars information,
              a quality picture and a strong sound file that captures your cars essential rumble.
            </p>
            </details>
      </div>
    );
  }
}

export default Faq;