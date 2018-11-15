import React, { Component } from 'react';
import Header from '../Header/Header'
import CarGrid from '../CarGrid/CarGrid'
import CarForm from '../CarForm/CarForm'
import Footer from '../Footer/Footer'
import Faq from '../Faq/Faq'
// import API from '../API/API'
import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="pageWrapper">
        <Header />
        <main>
          <Switch>
              {/* <Route path="/api" render={() => <API />}/> */}
              <Route path="/submit" render={() => <CarForm />}/>
              <Route path="/faq" render={() => <Faq />}/>
              <Route path="/" render={() => <CarGrid />}/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
