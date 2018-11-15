import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'


class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/submit">Submit A Sound</Link>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://exhaustnotes.herokuapp.com/api/cars">API</a>
            </li>
          </ul>
        </nav>
        <h1><Link to="/">Exhaust<br/>Notes</Link></h1>
        <h2>A Car Engine Sound Library</h2>
        
      </header>
    );
  }
}

export default Header;