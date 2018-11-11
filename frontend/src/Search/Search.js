import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  render() {
    return (
      <div className="carSearch">
        <input type="text" placeholder="Type a Car"/>
      </div>
    );
  }
}

export default Search;