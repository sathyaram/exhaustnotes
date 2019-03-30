import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CarForm from '../CarForm/CarForm'
import Faq from '../Faq/Faq'
import { Link } from 'react-router-dom';
import './Menu.scss'

class Menu extends Component {



  render() {
    return (
      <div>
        <div className="menuTrigger" onClick={this.openMenu}>
          <div>
            <i class="fas fa-flag-checkered"></i> 
          </div>
          <div>
            <i class="fas fa-flag-checkered"></i> 
          </div>
          Menu
        </div>
        <section className="Menu">
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/faq">About</Link>
              </li>
              <li>
                <Link to="/submit">Submit</Link>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://exhaustnotes.herokuapp.com/api/cars">API</a>
              </li>
            </ul>
          </nav>
        <h3>Exhaust Notes</h3>

          <Switch>
                <Route path="/submit" render={() => <CarForm />}/>
                <Route path="/faq" render={() => <Faq />}/>
          </Switch>        
        </section>
      </div>
    );

  }
}

export default Menu;