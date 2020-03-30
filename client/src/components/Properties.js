import React, { useState, useEffect } from 'react';
import Map from './Mapbox';
import { Link } from 'react-router-dom'
import '../assets/css/properties.css';

export default function Properties() {
    const retsData = JSON.parse(sessionStorage.getItem('retsData'));
    const [topProperty, setTopProperty] = useState('')
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    function isClicked(id) {
        return setTopProperty(id);
    }
    function handleClick(id) {
        sessionStorage.setItem('propertyId', id)
    }
    function showTopProperty() {
        return retsData.data.results.filter(res => {
            if(res.ListingID === topProperty) {
                return res
            }
            return null;
        }).map(res => {
            console.log(res.PhotoCount)
            var img = `http://www.promatchcomplete.com/pictures/GNMS/Listings/c/${res.ListingID}-01.jpg?Session=531000566`
            return (
            <div className="property-holder"
                key={res.ListingID}>
                <p className="property-city">
                    {res.City}
                </p>
                <h2 className="property-price">
                    {res.ListPrice}
                </h2>
                <div className="property-row">
                    <p className="property-text">
                        <strong> {res.Bedrooms} </strong> bd
                        <strong> {res.Baths} </strong> ba
                        <strong> {res.LivingArea} </strong> SqFt
                        <strong> {res.LotSizeArea} </strong> Acres
                        <strong> {res.Parking} </strong>
                    </p>
                </div>
                <div className="property-row">
                    <img src={img} style={{ display: "block", height: 200, width: 250 }} alt={res.ListingID}/>
                </div>
            </div>
        )})
    }
    function showProperties() {
        return retsData.data.results.filter(res => {
            if(topProperty !== '') {
                return res.ListingID !== topProperty && res.ListAgentOfficeID !== "COLT55"
            }
            return res.ListAgentOfficeID !== "COLT55"
        }).map(res => {
            var img = `http://www.promatchcomplete.com/pictures/GNMS/Listings/c/${res.ListingID}-01.jpg?Session=531000566`
            return (
            <div className="property-holder"
                key={res.ListingID}>
                <p className="property-city">
                    {res.City}
                </p>
                <h2 className="property-price">
                    {res.ListPrice}
                </h2>
                <div className="property-row">
                    <p className="property-text">
                        <strong> {res.Bedrooms} </strong> bd
                        <strong> {res.Baths} </strong> ba
                        <strong> {res.LivingArea} </strong> SqFt
                        <strong> {res.LotSizeArea} </strong> Acres
                        <strong> {res.Parking} </strong>
                    </p>
                </div>
                <div className="property-row">
                    <img className="property-img" src={img} />
                </div>
            </div>
        )})
    }
    function showColtmorProperties() {
        return retsData.data.results.filter(res => {
            if(topProperty.length > 0) {
                return res.ListingID !== topProperty && res.ListAgentOfficeID === "COLT55"
            }
            return res.ListAgentOfficeID === "COLT55"
        }).map(res => {
            var img = `http://www.promatchcomplete.com/pictures/GNMS/Listings/c/${res.ListingID}-01.jpg?Session=531000566`
            var id = res.ListingID
            return (
            <Link to="/property-details" className="property-holder"
                onClick={() => handleClick(id)}
                key={res.ListingID}>
                <p className="property-city">
                    {res.City}
                </p>
                <h2 className="property-price">
                    {res.ListPrice}
                </h2>
                <div className="property-row">
                    <p className="property-text">
                        <strong> {res.Bedrooms} </strong> bd
                        <strong> {res.Baths} </strong> ba
                        <strong> {res.LivingArea} </strong> SqFt
                        <strong> {res.LotSizeArea} </strong> Acres
                        <strong> {res.Parking} </strong>
                    </p>
                </div>
                <div className="property-row">
                    <img className="property-img" src={img} />
                </div>
            </Link>
        )})
    }
    return (
        retsData ? 
        <div className="properties-page">

            <div className="property-container">
                {topProperty.length > 0 ?
                    showTopProperty()
                : null}
                {showColtmorProperties()}
                {showProperties()}
            </div>
            <Map isClicked={(id) => isClicked(id)} />

        </div>
        : 
        <div className="properties-page"></div> 
    )
}
