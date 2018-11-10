import React, { Component } from 'react';
import Header from '../Header/Header'
import CarGrid from '../CarGrid/CarGrid'
import Faq from '../Faq/Faq'
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <Switch>
            <Route path="/faq" render={() => <Faq />}/>
            <Route path="/" render={() => <CarGrid />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
