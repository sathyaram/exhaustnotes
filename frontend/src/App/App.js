import React, { Component } from 'react';
import Header from '../Header/Header'
import CarGrid from '../CarGrid/CarGrid'
import CarForm from '../CarForm/CarForm'
import API from '../API/API'
import Footer from '../Footer/Footer'
import Faq from '../Faq/Faq'
import Menu from '../Menu/Menu'
import './App.scss';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <div className="pageWrapper">
        {/* <Menu /> */}
        <Header />
        <main id="main-content">
          <Switch>
              <Route path="/api" render={() => <API />}/>
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
