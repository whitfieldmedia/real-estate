import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function RetsData() {
    const [ landData, setLandData ] = useState()
    const [ retsData, setRetsData ] = useState()
    const [ isLoaded, setIsLoaded ] = useState()
    const data = JSON.parse(localStorage.getItem('data'))
    useEffect(() => {
        if(!data) {
            getLots()
            getData()
        }
    }, [])
    async function getLots() {
        try {
            await axios.get('/propertyData/land')
                .then(res => {
                    setLandData(res)
                    return setIsLoaded(true)
                })
        } catch(err) {
            console.log(err)
        }
    }
    async function getData() {
        try {
            await axios.get('/propertyData') 
                .then(res => {
                    setRetsData(res)
                    return setIsLoaded(true)
              })
          } catch(err) {
            console.log(err)
          }
    }
    function findCities() {
        var cityArr = []
        data.results.map(res => {
            if(!cityArr.includes(res.City)) {
                cityArr.push(res.City)
            } 
        })
        localStorage.setItem('cities', JSON.stringify(cityArr));
    }
    function addCommas(num) {
        return (num + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    function setPropertyId(id) {
        localStorage.setItem('propertyId', id)
    }
    function lowerCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    function featuredProperties() {
        var arr = []
        landData.data.results.map(res => {
            return arr.push(res)
        })
        retsData.data.results.map(res => {
            return arr.push(res)
        })
        const obj = {results: arr}
        localStorage.setItem('data', JSON.stringify(obj))
        findCities()
        return data.results.filter(res => res.ListAgentOfficeID === "COLT55").map(res => {
            var img = `http://www.promatchcomplete.com/pictures/GNMS/Listings/c/${res.ListingID}-01.jpg?Session=531000566`
            var alt = res.StreetNumber + " " + res.StreetName
            return (
                <Link to="/property-details" onClick={() => setPropertyId(res.ListingID)} className="home-property-container" key={res.ListingID}>
                    <div className="home-property-column">
                        <img className="home-property-img" src={img} alt={alt} />
                    </div>
                    <div className="home-property-detail-column">
                        <p className="home-price">
                            ${addCommas(res.ListPrice)}
                        </p>
                        <p className="home-city">
                            {res.StreetNumber} {res.StreetName}
                        </p>
                        <p className="home-city">
                            {res.City}, {lowerCase(res.State)}
                        </p>
                        <div className="home-property-row">
                            <p className="home-property-text">
                                {res.Bedrooms} bd
                            </p>
                            <p className="home-property-text">
                                {res.Baths} ba
                            </p>
                            <p className="home-property-text">
                                {res.LivingArea} sqft
                            </p>
                            <p className="home-property-text">
                                {res.LotSizeArea} Acres
                            </p>                              
                        </div>
                        <p className="home-property-par">
                            {res.PublicRemarks}
                        </p>
                    </div>
                </Link>
            )
        })
    }
    return (
        isLoaded ? 
        featuredProperties()
        : null
    )

}