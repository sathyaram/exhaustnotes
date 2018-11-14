import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  render() {
    return (
      <div className="carSearch">
        <input type="text" placeholder="Type a Car" onChange={this.props.updateQuery} value={this.props.searchQuery}/>
      </div>
    );
  }
}

export default Search;