import React, { Component } from 'react';
import Header from '../Header/Header'
import CarGrid from '../CarGrid/CarGrid'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import './App.scss';


class App extends Component {
  
  render() {
    return (
      <div className="page">
        <a href="#main-content" className="invisible">Skip to main content</a>    
        <Menu />
        <Header />
        <main role="main" id="main-content">
          <CarGrid />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
