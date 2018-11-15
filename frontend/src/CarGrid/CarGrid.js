import React, { Component } from "react";
import Car from "../Car/Car";
import axios from "axios";
import Search from '../Search/Search'

class CarGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      searchQuery:''
    };
  }

  getCars = () => {
    axios.get("/api/cars").then(res => {
      console.log(res)
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

  componentDidMount() {
    this.getCars();
  }

  render() {
    return (
      <div className="carWrapper">
        <Search searchQuery={this.state.searchQuery} updateQuery={this.updateSearchQuery}/>
        <Car searchQuery={this.state.searchQuery} contents={this.state.content}/>
      </div>
    );
  }
}

export default CarGrid;
