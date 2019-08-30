import React, { Component } from "react";
import Car from "../Car/Car";
import Search from '../Search/Search';
import cars from './../cars.json';

class CarGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      currentPage: [],
      searchQuery: '',
      page: 1,
      isLoading: false
    };
  }

  getCars = () => {
    this.setState({
      content: cars,
      currentPage: cars.slice(0, 6),
    });
  };

  loadMore = () => {
    if (!this.state.isLoading) {
      if (this.state.content[(this.state.page * 6) - 1] !== undefined) {
        this.setState({ isLoading: true }, () => {
          this.setState({
            currentPage: this.state.content.slice(0, (this.state.page * 6)),
            isLoading: false,
            page: this.state.page + 1
          })
        })
      } else {
        this.setState({ page: null })
      }
    }
  }

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
        <Search searchQuery={this.state.searchQuery} clearQuery={this.clearSearchQuery} updateQuery={this.updateSearchQuery} />
        <Car searchQuery={this.state.searchQuery} currentPage={this.state.currentPage} contents={this.state.content} loadMore={this.loadMore} isLoading={this.state.isLoading} page={this.state.page} />
      </div>
    );
  }
}

export default CarGrid;
