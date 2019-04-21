import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import CarForm from '../CarForm/CarForm';


import './Header.scss'


class Header extends Component {

  openMenu() {
    let body = document.querySelector('body');
    let menu = document.querySelector(".menuTrigger");
    body.classList.toggle("active");
    menu.classList.toggle("open");
  }

  render() {
    return (
      <header role="banner">
        <div className="menuTrigger" onClick={this.openMenu}>
          <i class="fas fa-flag-checkered"></i><span>About</span>
        </div>
        <section >
          <article>
            <div><About /></div>
            <div><CarForm /></div>
          </article>
        </section>
        <h1 role="site-name" title="Exhaust Notes"><Link to="/">Exhaust<br/>Notes</Link></h1>
        <h2 role="tagline">A Car Engine Sound Library</h2>
      </header>
    );
  }
}

export default Header;