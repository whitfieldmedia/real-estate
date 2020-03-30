import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import MortgageCalculator from './components/MortgageCalculator';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import PropertyDetails from './components/PropertyDetails'
import Properties from './components/Properties';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './assets/css/styles.css';

export default function App() {
  useEffect(() => {
    window.scrollTo(0,0)
    getRets();
  },[])
  async function getRets() {
    console.log('fetching data')
    try {
      await axios.get('http://localhost:3500/propertyData') 
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
        <Route path="/mortgage-calculator" component={MortgageCalculator} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/property-details" component={PropertyDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

    // const fetchReducer = (state, action) => {
    //     switch(action.type) {
    //         case "FAILED":
    //             return {
    //                 data: null,
    //                 isLoading: false,
    //                 errorMessage: action.error
    //             }
    //         case "SUCCESS":
    //             return {
    //                 data: action.data,
    //                 isLoading: false,
    //                 errorMessage: ''
    //             }
    //         default:
    //             return {
    //                 data: [],
    //                 isLoaded: false
    //             }
    //     }
    // }


    // const initialState = { data: null, isLoading: true, errorMessage: ''}
    // const localState = JSON.parse(sessionStorage.getItem('retsData'));
    // const [ state, dispatch ] = useReducer(fetchReducer, initialState)
    // const fetchData = async () => {
    //       try {
    //           const res = await axios.get('http://localhost:3500/propertyData')
    //           const retsData = JSON.stringify(res.data.results);
    //           sessionStorage.setItem('retsData', retsData)
    //           getPhotos()
    //           dispatch({
    //               type: "SUCCESS",
    //               data: res.retsData.results
    //           })
    //           // const response = JSON.stringify(res.retsData.results)
    //           // const photos = JSON.stringify(res.retsPhotos);
    //           // return sessionStorage.setItem('retsData', response)
    //       } catch( error ) {
    //           dispatch({
    //               type: "FAILED",
    //               error: error.message || error
    //           })
    //       }
    //   }
    //   const getPhotos = () => {
    //       for(var i = 0; i < localState.length; i++) {
    //           var id = localState[i].ListingID;
    //           getPhoto(id)
    //       }
    //   }
    //   const getPhoto = async (id) => {
    //       try {
    //           const photo = await axios.get('http://localhost:3500/propertyData/photo', {
    //               params: {
    //                   id: id
    //               }
    //           })
    //           console.log(photo)
    //       }catch (err) {
    //           console.log("ERR " + err)
    //       }
    //   }
