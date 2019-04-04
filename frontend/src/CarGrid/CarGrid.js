import React, { Component } from "react";
import Car from "../Car/Car";
import axios from "axios";
import Search from "../Search/Search";

const api =
  process.env.REACT_APP_API === undefined
    ? "http://localhost:3500"
    : process.env.REACT_APP_API;

class CarGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      searchQuery: "",
      page: 0,
      isLoading: true
    };
  }

  getCars = () => {
    if (!this.state.loading) {
      this.setState({ isLoading: true });
      axios
        .get(`${api}/api/cars/${this.state.page}`)
        .then(res => {
          this.setState({
            content: [...this.state.content, ...res.data.items],
            isLoading: false,
            page: res.data.page
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  updateSearchQuery = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  componentDidMount() {
    this.getCars();
  }

  render() {
    return (
      <div className="carWrapper">
        <Search
          searchQuery={this.state.searchQuery}
          updateQuery={this.updateSearchQuery}
        />
        <Car
          searchQuery={this.state.searchQuery}
          contents={this.state.content}
          getCars={this.getCars}
          hasMore={this.state.hasMore}
          isLoading={this.state.isLoading}
          page={this.state.page}
        />
      </div>
    );
  }
}

export default CarGrid;
