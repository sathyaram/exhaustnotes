import React, { Component } from 'react';

import './About.scss'

class About extends Component {

  
  render() {
    let red = {
      color: '#f42737'
    }
    
    let react = {
      color: '#61dafb'
    };
    let axios = {
      color: '#17a2c9'
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
      <div className="about">
      <h3>What is ExhaustNotes?</h3>
      <p>
        ExhaustNotes is a website where you can browse a collection of distinct sounds a car makes when it revs its engine. The roar of a car exhaust when the accelerator is pushed is a glorious experience and should be appreciated for all its intricacies. On this site, you'll be able to browse many car brands' top car models and hear their exhaust note, as every car is different.
        <br></br>
        <br></br>
      </p>
      <hr/>
      <h3>But like, why though?</h3>
      <p>
        Because... I wanted to make a website that people could use to hear the awesome sounds cars make. I don't think there's any sort of central place to hear on the internet, so I thought I'd fill that void. Oh, I also <strong>freaking love cars</strong>, so why the heck not!
      </p>
      <br></br>
      <hr/>
      <h3>Can I see where the images/sounds are from?</h3>
      <p>
        Absolutely! When you're hovering over a car, in the bottom right area you'll see two links pop up that credit the image source and the sound source. Click a link to be taken to a new page where that sound/image was sourced.
      </p>
      <br></br>
      <hr/>
      <h3>Why .co and not .com?</h3>
      <p>
        Because someone is freaking squatting on exhaustnotes.com and not using it, SO THAT MEANS THE WORLD CAN'T USE IT AND I'M SALTY AS HELL.
      </p>
      <br></br>
      <hr/>
      <h3>What can I do with it?</h3>
      <p>
        A full-fledged API is coming soon; you'll be able to nicely interface with and deliver the sounds and images from this website. You can technically reference <a style={red} href="/api/cars">/api/cars</a> as it is currently live, but it is <strong>not</strong> fully developed.
        <br></br>
        <br></br>
        Other than that, you can just sit back and listen to the revs, yo.
      </p>
      <br></br>
      <hr/>
      <h3>Can I do anything to help?</h3>
      <p>
        Glad you asked! ExhaustNotes is an open source project so I would absolutely love users to contribute high quality sounds. Here's what I'm going to need from you, well-formatted, in an email:
        </p> 
        <ul>
          <strong><li>The Car Make</li>
          <li>The Car Model</li>
          <li>The Car Year</li>
          <li>The Car Trim/Package</li>
          <li>A High Resolution Image of The Car</li>
          <li>A Quality Exhaust Sound Byte from The Car</li>
          <li>The Car Credit</li>
          <li>The Car Link</li></strong>
          <br/>
        </ul>
        <p>Send all of the above information: 
          <strong><a style={red} href="mailto:exhaustnotesco@gmail.com"> exhaustnotesco@gmail.com</a></strong>
        </p>
        <br/>
        <p>
          If you have a suggestion, or want to help, I'm all ears! Throw a message in the email you send me.
       <br></br>
      <br></br>
      All submissions will be reviewed thoroughly to ensure photo quality is razorsharp, and sound quality is high fidelity.
      <br></br>
      <br></br>
         </p>
         <hr/>
      <h3>What's it made with?</h3>
        <div>
          <p>
            <label>Tech</label>
            <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/" style={react}>React.js</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://expressjs.org/" style={express}>Express.js</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/" style={mongo}>MongoDB</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://aws.amazon.com/lightsail/" style={lightsail}>Lightsail</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://axois.com" style={axios}>Axios</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://fontawesome.com" style={fontawesome}>FontAwesome</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://flexbox.org/" style={flexbox}>Flexbox</a>
            <br></br>
          </p>
          <p>
            <label>Fonts</label>
            <a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/specimen/Rajdhani" style={tomato}>Rajdhani</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/specimen/Bungee" style={tomato}>Bungee</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/specimen/Alfa+Slab+One" style={tomato}>Alfa Slab One</a>
            <br></br>
          </p>
          <p>
            <label>Help From</label>
            <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/void2star" style={crimson}>Arun Ram</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/void2star" style={crimson}>Deva Sagar</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://ortizlu.com" style={crimson}>Luis Ortiz</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://andretimar.com" style={crimson}>Andre Timar</a>
            <br></br>
          </p>
          <p>
            <label>Media</label>
            <a target="_blank" rel="noopener noreferrer" href="https://giphy.com" style={giphy}>Giphy</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://youtube.com" style={youtube}>Youtube</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/kosmetism/react-soundplayer" style={reactsound}>React SoundPlayer</a>
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://transparenttextures.com" style={express}>Transparent Textures</a>
            <br></br>
          </p>
        </div>
      ...And from viewers like you. Thank you!
      </div>
    );
  }
}

export default About;