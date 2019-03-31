import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <header>
        <div className="menuTrigger" onClick={this.openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/faq"><i class="fas fa-flag-checkered"></i> About</Link>
            </li>
            <li>
              <Link to="/submit"><i class="fas fa-microphone-alt"></i>  Submit</Link>
            </li>
            {/* <li>
              <Link to="/api"><i class="fas fa-code"></i>  API</Link>
            </li> */}
            {/* <li>
              <a target="_blank" rel="noopener noreferrer" href="https://exhaustnotes.herokuapp.com/api/cars">API</a>
            </li> */}
          </ul>
        </nav>
        <h1 title="Exhaust Notes"><Link to="/">Exhaust<br/>Notes</Link></h1>
        <h2>A Car Engine Sound Library</h2>
      </header>
    );
  }
}

export default Header;