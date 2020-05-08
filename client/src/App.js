import React, { useEffect, useState } from 'react';
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
  const retsData = JSON.parse(localStorage.getItem('retsData'))
  const landData = JSON.parse(localStorage.getItem('landData'))
  const [ isLoaded, setIsLoaded ] = useState(false)
  useEffect(() => {
    window.scrollTo(0,0)
    if(!retsData || !landData) {
      getData()
    } else {
      setIsLoaded(true)
    }
    var path = window.location.pathname;
    if(path.split('/')[1] === 'property-details' && path.split('/')[2]) {
      var id = path.split('/')[2]
      localStorage.setItem('propertyId', id)
    }
  }, [])
  async function getData() {
    try {
      await axios.get('/propertyData')
        .then(res => {
          localStorage.setItem('retsData', JSON.stringify(res))
          return getLandData()
        })
    } catch (err) {
      console.log(err)
    }
  }
  async function getLandData() {
    try { 
      await axios.get('/propertyData/land')
        .then(res => {
          localStorage.setItem('landData', JSON.stringify(res))
          setIsLoaded(true)
        })
    } catch (err) {
      console.log(err)
    }
  }
  function findCities() {
    var arr = []
    retsData.data.results.map(res => {
      return arr.push(res)
    })
    landData.data.results.map(res => {
      return arr.push(res)
    })
    const obj = { results: arr }
    localStorage.setItem('data', JSON.stringify(obj))
    setCities()
  }
  function setCities() {
    var cityArr = []
    retsData.data.results.map(res => {
      var str;
      if(Number(res.City) > 0) {
        str = res.County
      } else {
        str = res.City
      }
      if(!cityArr.includes(str)) {
        return cityArr.push(str)
      } else {
        return res;
      }
    })
    landData.data.results.map(res => {
      var str;
      if(Number(res.City) > 0) {
        str = res.County
      } else {
        str = res.City
      }
      if(!cityArr.includes(str)) {
        return cityArr.push(str)
      } else {
        return res;
      }
    })
    localStorage.setItem('cities', JSON.stringify(cityArr));
  }
  if(isLoaded) {
    findCities()
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