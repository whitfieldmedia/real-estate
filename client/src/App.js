import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import PropertyDetails from './components/PropertyDetails'
import Properties from './components/Properties';
import Calculator from './components/MortgageCalculator';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './assets/css/styles.css';

export default function App() {
  const retsData = sessionStorage.getItem('retsData');
  useEffect(() => {
    window.scrollTo(0,0)
    if(!retsData) {
      getRets();
    }
  })
  async function getRets() {
    try {
      await axios.get('/propertyData') 
        .then(res => {
          sessionStorage.setItem('retsData', JSON.stringify(res));
        })
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/properties" component={Properties} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/mortgage-calculator" component={Calculator} />
        <Route path="/property-details" component={PropertyDetails} />
      </Switch>
      <Footer />
    </div>
  );
}