import React, { Component } from 'react';
import './css/main.css';
import Header from './header';
import Hero from './hero';
import Destinations from './destinations';
import Packages from './packages';
import Testimonials from './testimonials';
import Contact from './contact';
import Footer from './footer';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Hero />
        <Destinations />
        <Packages />
        <Testimonials />
        <Contact />
        <Footer />
        


      </div>
    );
  }
}

export default App;
