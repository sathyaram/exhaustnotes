import React, { Component } from 'react';
import Header from '../Header/Header'
import CarGrid from '../CarGrid/CarGrid'
import CarForm from '../CarForm/CarForm'
import Footer from '../Footer/Footer'
import About from '../About/About'
import './App.scss';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <div className="page">
        <Header />
        <main id="main-content" role="main">
          <Switch>
              <Route path="/submit" render={() => <CarForm />}/>
              <Route path="/about" render={() => <About />}/>
              <Route path="/" render={() => <CarGrid />}/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
