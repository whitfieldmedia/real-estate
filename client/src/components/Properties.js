import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/properties.css';

export default function Properties() {
    const data = JSON.parse(localStorage.getItem('data'));
    const [ isLoaded, setIsLoaded ] = useState(false)
    const city = localStorage.getItem('city')
    const [ current, setCurrent ] = useState()
    const cities = JSON.parse(localStorage.getItem('cities'))
    const [ minPrice, setMinPrice ] = useState(0)
    const [ maxPrice, setMaxPrice ] = useState(0)
    useEffect(() => {
        window.scrollTo(0,0);
        if(data) {
            setIsLoaded(true)
        }
        if(city) {
            setCurrent(city)
        }
    }, [data, city])
    function handleClick(id) {
        localStorage.setItem('propertyId', id)
    }
    function handleMin(price) {
        var min = Number(minPrice)
        var num = Number(price)
        if(num > min || min === 0) {
            return true;
        } else {
            return false;
        }
    }
    function handleMax(price) {
        var max = Number(maxPrice)
        var num = Number(price)
        if(max > num || maxPrice === 'any' || max === 0) {
            return true
        } else {
            return false
        }
    }
    function handleCity(str) {
        var cur;
        if(current) {
            cur = current.toLowerCase()
        } else {
            cur = 'all'
        }
        var st = str.toLowerCase()
        if(st === cur || cur === 'all' ) {
            return true
        } else {
            return false;
        }
    }
    function showProperties() {
        return data.results.filter(res => {
            var min = handleMin(res.ListPrice)
            var max = handleMax(res.ListPrice)
            var cit = handleCity(res.City)
            if( min && max && cit ) {
                return res
            } else {
                return null;
            }
        }).sort((a, b) => {
            if(a.ListAgentOfficeID === "COLT55") {
                a = 1
            } else {
                a = -1
            }
            if(b.ListAgentOfficeID === "COLT55") {
                b = 1
            } else {
                b = -1
            }
            return b-a
        }).map(res => {
            return mapProperties(res)
        })
    }
    function addCommas(num) {
        return (num + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    function split(str) {
        return str.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")
    }
    function lotSize(str) {
        if(str.split(' ')[1] === 'Acres') {
            return str;
        } else {
            return str + ' Acres'
        }
    }
    function mapProperties(res) {
        var id = res.ListingID;
        var url = `http://www.promatchcomplete.com/pictures/GNMS/Listings/b/${id}-01.jpg?Session=531000566`
        if(res.PropertyType === "LotsAndLand") {
            return (
                <Link to={`/property-details/${res.ListingID}`} className="property-holder"
                    onClick={() => handleClick(id)}
                    key={res.ListingID}>
                    <div className="property-img-holder">
                        <img src={url} className="home-property-img" alt={res.ListingID} />
                    </div>
                    <div className="property-row">
                        <p className="property-price">
                            ${addCommas(res.ListPrice)}
                        </p>
                        <p className="property-text">
                            {lotSize(res.LotSizeDim)}
                        </p>
                    </div>
                    <p className="property-city">
                        {res.StreetNumber} {res.StreetName} {Number(res.City) > 0 ? res.County : res.City}, MS {res.PostalCode}
                    </p>
                    <p className="property-par">
                        {res.ListingStatus} {split(res.PropertyType)}
                    </p>
                </Link>
            )
        } else {
            return (
                <Link to={`/property-details/${res.ListingID}`} className="property-holder"
                    onClick={() => handleClick(id)}
                    key={res.ListingID}>
                        <div className="property-img-holder">
                            <img src={url} className="home-property-img" alt={res.ListingID} />
                        </div>
                        <div className="property-row">
                            <p className="property-price">
                                ${addCommas(res.ListPrice)}
                            </p>
                            <p className="property-text">
                                {res.Bedrooms} bd
                            </p>
                            <p className="property-text">
                                {res.Baths} ba
                            </p>
                            <p className="property-text">
                                {res.LivingArea} sqft
                            </p>                     
                        </div>
                        <p className="property-city">
                            {res.StreetNumber} {res.StreetName} {res.City}, MS {res.PostalCode}
                        </p>
                        <p className="property-par">
                            {res.ListingStatus} {split(res.PropertyType)}
                        </p>
                </Link>
            )
        }
    }
    function handleCityChange(e) {
        localStorage.setItem('city', e.target.value)
        if(current !== e.target.value) {
            setCurrent(e.target.value)
        }
    }
    return (
        isLoaded ? 
        <div className="properties-page">
            <div className="sort-options-wrapper">
                <div className="sort-option-holder">
                    <label className="sort-text" htmlFor="city">
                        City
                    </label>
                    <select className="property-city-sort" value={current} onChange={(e) => handleCityChange(e)}>
                        <option className="city-dropdown-value" defaultValue="all"> All </option>
                        {cities.map(res => (
                            <option key={res} className="city-dropdown-value" value={res}> {res} </option>
                        ))}
                    </select>
                </div>
                <div className="sort-option-holder">
                    <label className="sort-text" htmlFor="price_range">
                        Price
                    </label>
                    <select className="property-price-sort" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
                        <option value="0"> $0+ </option>
                        <option value="50000">$50,000+</option>
                        <option value="100000">$100,000+</option>
                        <option value="150000">$150,000+</option>
                        <option value="200000">$200,000+</option>
                        <option value="350000">$350,000+</option>
                        <option value="400000">$400,000+</option>
                        <option value="450000">$450,000+</option>
                        <option value="500000">$500,000+</option>
                        <option value="550000">$550,000+</option>
                        <option value="600000">$600,000+</option>
                        <option value="650000">$650,000+</option>
                        <option value="700000">$700,000+</option>
                        <option value="750000">$750,000+</option>
                        <option value="800000">$800,000+</option>
                        <option value="850000">$850,000+</option>
                        <option value="900000">$900,000+</option>
                    </select>
                    <span className="sort-par"> To </span>
                    <select className="property-price-sort" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
                        <option value="any"> Any Price </option>
                        <option value="50000">$50,000</option>
                        <option value="100000">$100,000</option>
                        <option value="150000">$150,000</option>
                        <option value="200000">$200,000</option>
                        <option value="350000">$350,000</option>
                        <option value="400000">$400,000</option>
                        <option value="450000">$450,000</option>
                        <option value="500000">$500,000</option>
                        <option value="550000">$550,000</option>
                        <option value="600000">$600,000</option>
                        <option value="650000">$650,000</option>
                        <option value="700000">$700,000</option>
                        <option value="750000">$750,000</option>
                        <option value="800000">$800,000</option>
                        <option value="850000">$850,000</option>
                        <option value="900000">$900,000</option>
                        <option value="950000">$950,000</option>
                        <option value="1000000">$1,000,000</option>
                    </select>
                </div> 
            </div>
            <div>
                <div className="property-container">
                    {showProperties()}
                </div>
            </div>
        </div>
        : 
        <div className="properties-page"></div> 
    )
}
