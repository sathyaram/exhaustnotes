import React, { Component } from 'react';
import Header from '../Header/Header'
import CarGrid from '../CarGrid/CarGrid'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import MetaTags from 'react-meta-tags';
import './App.scss';
import * as Config from '../config';


class App extends Component {

  constructor() {
    super();
    
    // Create a placholder to replace the variable guards
    const ratingsPlaceholder = localStorage.getItem('carRatings');
    if (!ratingsPlaceholder) {
      localStorage.setItem('carRatings', JSON.stringify([]));
    }
  }
  
  render() {
    return (
      <div className="page">
        <a href="#main-content" className="invisible">Skip to main content</a>    
        <Menu />
        <Header />
        <main role="main" id="main-content">
          <MetaTags>
            <title>{ Config.seo.title }</title>
            <meta name="description" 		    content={ Config.seo.description } />
            <meta property="og:url"			    content={ Config.seo.baseUrl } />
            <meta property="og:type"		    content="website" />
            <meta property="og:title" 		  content={ Config.seo.title }/>
            <meta property="og:description" content={ Config.seo.description }/>
            <meta property="og:image" 		  content={ Config.seo.image }/>
            <meta property="og:site_name" 	content={ Config.seo.title }/>
          </MetaTags>
          <CarGrid />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
