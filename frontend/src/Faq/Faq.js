import React, { Component } from 'react';

import './Faq.scss'

class Faq extends Component {

  
  render() {
    let react = {
      color: '#61dafb'
    };

    let express = {
      color: '#eeeeee'
    };

    let flexbox = {
      color: '#ff8a01'
    };

    let tomato = {
      color: '#ff5252'
    };

    let fontawesome = {
      color: '#0ca678'
    }
    let mongo = {
      color: '#13aa52'
    }
    let lightsail = {
      color: '#e76d0c'
    }

    let crimson = {
      color: '#f42737'
    }

    let giphy = {
      color: '#c64cec'
    }

    let reactsound = {
      color: '#4fe7b7'
    }

    let youtube = {
      color: '#ff0000'
    }

    return (
      <div className="faq">
      <h3>What is ExhaustNotes?</h3>
      <p>
        ExhaustNotes is a website where you can hear the distinct sounds a car makes when it revs its engine. The roar a car makes when its throttle is pushed is marvelous, glorious sound that should be appreciated for all its intricacies. On this site, you'll be able to browse many brands' top car models and hear their exhaust note, as every car is different. Listen closely, my friends. 
        <br></br>
        <br></br>
      </p>
      <h3>What's it made with?</h3>
        <div>
          <p>
            <h4>Tech</h4>
            <a rel="noopener noreferrer" href="https://reactjs.org/" style={react}>React.js</a>
            <br></br>
            <a rel="noopener noreferrer" href="https://expressjs.org/" style={express}>Express.js</a>
            <br></br>
            <a rel="noopener noreferrer" href="https://www.mongodb.com/" style={mongo}>MongoDB</a>
            <br></br>
            <a rel="noopener noreferrer" href="https://aws.amazon.com/lightsail/" style={lightsail}>Lightsail</a>
            <br></br>
            <a rel="noopener noreferrer" href="https://fontawesome.com" style={fontawesome}>FontAwesome</a>
            <br></br>
            <a rel="noopener noreferrer" href="https://flexbox.org/" style={flexbox}>Flexbox</a>
            <br></br>
            
          </p>
          <p>
            <h4>Fonts</h4>
            <a rel="noopener noreferrer" href="https://fonts.google.com/specimen/Rajdhani" style={tomato}>Rajdhani</a>
            <br></br>
            <a rel="noopener noreferrer" href="https://fonts.google.com/specimen/Bungee" style={tomato}>Bungee</a>
            <br></br>
            <a rel="noopener noreferrer" href="https://fonts.google.com/specimen/Alfa+Slab+One" style={tomato}>Alfa Slab One</a>
            <br></br>
          </p>
          <p>
            <h4>Media</h4>
            <a rel="noopener noreferrer" href="https://giphy.com" style={giphy}>Giphy</a>
            <br></br>
            <a rel="noopener noreferrer" href="https://youtube.com" style={youtube}>Youtube</a>
            <br></br>
            <a rel="noopener noreferrer" href="https://github.com/kosmetism/react-soundplayer" style={reactsound}>React SoundPlayer</a>
            <br></br>
          </p>
          <p>
            <h4>Love From</h4>
            <a rel="noopener noreferrer" href="https://ortizlu.com" style={crimson}>Luis Ortiz</a>
            <br></br>
            <a rel="noopener noreferrer" href="#" style={crimson}>Arun & Deva</a>
            <br></br>
            <a rel="noopener noreferrer" href="https://generalassemb.ly" style={crimson}>General Assembly</a>
            <br></br>
          </p>
        </div>
      ...And you!
      <h3>But like, why though?</h3>
      <p>
        Because, I wanted to make a tool that people could use to hear the sick sounds cars make. I don't think there's any sort of central place to hear them all so I thought I'd fill that void. Oh, I also <strong>freaking love cars</strong>, so why the heck not.
      </p>
      <h3>What can I do with the API?</h3>
      <p>
        Whatever you want.
      </p>
        {/* <details>
            <summary>What is ExhaustNotes?</summary>
            <p>This is a website to centralize a collection of car exhaust noises. 
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
            </details> */}
      </div>
    );
  }
}

export default Faq;