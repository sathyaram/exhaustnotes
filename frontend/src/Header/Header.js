import React, { Component } from 'react';
import './Header.scss'

class Header extends Component {

  render() {
    return (
      <header id="header" role="banner">
        <h1 name="site-name" title="Exhaust Notes"><a href="/">Exhaust<br/>Notes</a></h1>
        <h2 name="tagline">A Collection of Car Engine Sounds</h2>
      </header>
    );
  }
}

export default Header;