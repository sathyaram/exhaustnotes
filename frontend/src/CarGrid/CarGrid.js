import React, { Component } from "react";
import Car from "../Car/Car";
import axios from "axios";
import Search from '../Search/Search';


const api = (process.env.REACT_APP_API === undefined) ? 'http://localhost:3500' : process.env.REACT_APP_API;

class CarGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      searchQuery:''
    };
  }

  getCars = () => {
    axios.get(`${api}/api/cars`).then(res => {
    this.setState({
      content: res.data
    });
    }).catch(err => {
      console.log(err);
    });
  };

  updateSearchQuery = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  clearSearchQuery = (e) => {
    this.setState({
      searchQuery: ''
    })
  }

  componentDidMount() {
    this.getCars();
  }

  render() {
    return (
      <div className="carWrapper">
        <Search searchQuery={this.state.searchQuery} clearQuery={this.clearSearchQuery} updateQuery={this.updateSearchQuery}/>
        <Car searchQuery={this.state.searchQuery} contents={this.state.content}/>
      </div>
    );
  }
}

export default CarGrid;
