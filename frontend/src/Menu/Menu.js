import React, { Component } from 'react';
import About from '../About/About';

import './Menu.scss'
class Menu extends Component {

  openMenu() {
    let body = document.querySelector('body');
    let menu = document.querySelector(".menuTrigger");
    body.classList.toggle("active");
    menu.classList.toggle("open");
  }

  toTop = (e) => {
    window.scrollTo(0, 0);
  }

  

  render() {
    return (
      <div class="menu">
         <div className="menuTrigger" onClick={this.openMenu}>
          <i class="fas fa-flag-checkered"></i><span>About</span>
        </div>
        <section >
          <article>
            <About />
          </article>
        </section>
        <div id="beamMeUp" onClick={this.toTop}>
          <i class="fas fa-chevron-up"></i>
        </div>
      </div>
    );
  }
}

export default Menu;