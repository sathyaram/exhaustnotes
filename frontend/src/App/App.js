import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import About from "../About/About";
import CarGrid from "../CarGrid/CarGrid";
import CarForm from "../CarForm/CarForm";
import Footer from "../Footer/Footer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="page">
        <a href="#main-content" className="invisible">
          Skip to main content
        </a>
        <Header />
        <main role="main" id="main-content">
          <Switch>
            <Route path="/submit" render={() => <CarForm />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/" render={() => <CarGrid />} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
