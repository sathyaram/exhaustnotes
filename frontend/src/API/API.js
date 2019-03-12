import React, { Component } from 'react';
import axios from 'axios';

class API extends Component {

  state = {
    apiResult: {}
  }

  componentDidMount() {
    this.getCars();
  }

  getCars =  () => {   
    axios.get("https://exhaustnotes.herokuapp.com/api/cars").then(res => {
      
      this.setState({
        apiResult: res.data
      })
    }).catch(err => {
      console.log(err);
    });
  };

  render() {
    console.log(this.state.apiResult);
    return (
      <code>
        {JSON.stringify(this.state.apiResult)}
      </code>
    );
  }
}

export default API;