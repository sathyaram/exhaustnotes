import React, { Component } from "react";
import Car from "../Car/Car";
import axios from "axios";
import Search from '../Search/Search'

class CarGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }

  getCars = () => {
    axios.get("http://localhost:3500/api/cars").then(res => {
      console.log(res)
    this.setState({
      content: res.data
    });
    }).catch(err => {
      console.log(err);
    });
  };

  componentDidMount() {
    this.getCars();
  }

  render() {
    return (
      <div className="carWrapper">
        <Search />
        <Car contents={this.state.content}/>
      </div>
    );
  }
}

export default CarGrid;
