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
      currentPage: [],
      searchQuery: '',
      page: 1,
      isLoading: false
    };
  }

  getCars = () => {
    axios.get(`${api}/api/cars`).then(res => {
      this.setState({
        content: res.data,
        currentPage: res.data.slice(0, 6),
      });
    }).catch(err => {
      console.log(err);
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
