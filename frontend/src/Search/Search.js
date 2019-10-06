import React, { Component } from 'react';
import './Search.scss'

class Search extends Component {

  render() {
    return (
      <div className="carSearch">
        <div className="inputWrapper">
          <label>Car Search</label>
          <input name="search" aria-label="search" id="search" type="text" placeholder="Type a Car or Scroll" role="search" onChange={this.props.updateQuery} value={this.props.searchQuery}/>
          <button name="clear search" id="clear-search" onClick={this.props.clearQuery}><i className="far fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default Search;
