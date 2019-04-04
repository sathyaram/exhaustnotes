import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

class Header extends Component {
  openMenu() {
    let body = document.querySelector("body");
    let menu = document.querySelector(".menuTrigger");
    body.classList.toggle("active");
    menu.classList.toggle("open");
  }

  render() {
    return (
      <header role="header">
        <div className="menuTrigger" onClick={this.openMenu}>
          <span />
          <span />
          <span />
        </div>
        <nav role="navigation">
          <ul>
            <li>
              <Link to="/about">
                <i className="fas fa-flag-checkered" /> About
              </Link>
            </li>
            <li>
              <Link to="/submit">
                <i className="fas fa-microphone-alt" /> Submit
              </Link>
            </li>
          </ul>
        </nav>
        <h1 role="site-name" title="Exhaust Notes">
          <Link to="/">
            Exhaust
            <br />
            Notes
          </Link>
        </h1>
        <h2 role="tagline">A Car Engine Sound Library</h2>
      </header>
    );
  }
}

export default Header;
