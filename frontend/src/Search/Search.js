import React, { Component } from 'react';
import './Search.scss'

class Search extends Component {

  // componentDidMount() {
  //   const nav = document.querySelector('.carSearch');
  //   const navTop = nav.offsetTop;
  //   function stickyNavigation() {
  //     if (window.scrollY >= navTop) {
  //       document.body.classList.add('fixed-nav');
  //     } else {
  //       document.body.classList.remove('fixed-nav');
  //     }
  //   }
  //   window.addEventListener('scroll', stickyNavigation);
  // }

  // clearInput() {
    
  //   ;
  //   this.setState({
  //     : null
  //   });
  // }

  // clearInput = (e) => {
  //   var search = document.getElementById('search');
  //   this.setState({
  //     search.value: null
  //   });
  // }

  render() {
    return (
      <div className="carSearch">
        <div className="inputWrapper">
          <label>Car Search</label>
          <input id="search" type="text" placeholder="Type a Car or Scroll Forever" role="search" onChange={this.props.updateQuery} value={this.props.searchQuery}/>
          <button id="clear-search" onClick={this.props.clearQuery}><i class="far fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default Search;