import React, { Component } from 'react';
import Search from '../Search/Search'
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
              <Link to="/api">API</Link>
            </li>
          </ul>
        </nav>
        <h1><Link to="/">Exhaust<br/>Notes</Link></h1>
        <h2>An Engine Sound Library</h2>
        <Search />
      </header>
    );
  }
}

export default Header;