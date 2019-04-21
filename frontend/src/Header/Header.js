import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './Header.scss'


class Header extends Component {

  render() {
    return (
      <header id="header" role="banner">
        <h1 role="site-name" title="Exhaust Notes"><a href="/">Exhaust<br/>Notes</a></h1>
        <h2 role="tagline">A Car Engine Sound Library</h2>
      </header>
    );
  }
}

export default Header;