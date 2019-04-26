import React, { Component } from 'react';
import About from '../About/About';

import './Menu.scss'
class Menu extends Component {

  openMenu() {
    let body = document.querySelector('body');
    let menu = document.querySelector(".menuTrigger");
    body.classList.toggle("active");
    menu.classList.toggle("open");
  };

  toTop = () => {
    window.scrollTo(0, 0);
  };

  revealYourself = () => {
    var beamMeUp = document.getElementById("beamMeUp");
    var y = window.scrollY;
    if (y >= 800) {
      beamMeUp.classList = 'show';
    } else {
      beamMeUp.classList = '';
    }
  };

  clickClose = () => {
    var section = document.getElementById('info');
    let body = document.querySelector('body');
    let menu = document.querySelector(".menuTrigger");
    //I'm using "click" but it works with any event
      document.addEventListener('click', function(e) {
      if (!body.classList.contains('active')) {

        var isClickInside = section.contains(e.target);
        if (!isClickInside) {
        //the click was outside the specifiedElement, do something
          body.classList.toggle("active");
          menu.classList.toggle("open");
        }
      }
    });
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.revealYourself);
    // this.clickClose();
  };
  
  render() {
    return (
      <div className="menu">
         <div className="menuTrigger" onClick={this.openMenu}>
          <i className="fas fa-flag-checkered"></i><span>About</span>
        </div>
        <section id="info">
          <article>
            <About />
          </article>
        </section>
        <div id="beamMeUp" onClick={this.toTop}>
          <i className="fas fa-chevron-up"></i>
        </div>
      </div>
    );
  }
}

export default Menu;