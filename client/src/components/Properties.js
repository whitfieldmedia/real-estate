import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../assets/scss/properties.scss';

export default function Properties() {
    const retsData = JSON.parse(sessionStorage.getItem('retsData'));
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    function handleClick(id) {
        sessionStorage.setItem('propertyId', id)
    }
    function showProperties() {
        return retsData.data.results.filter(res => {
            return res.ListAgentOfficeID !== "COLT55"
        }).map(res => {
            return mapProperties(res)
        })
    }
    function addCommas(num) {
        return (num + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    function mapProperties(res) {
        var img = `http://www.promatchcomplete.com/pictures/GNMS/Listings/c/${res.ListingID}-01.jpg?Session=531000566`
        var id = res.ListingID
        return (
            <Link to="/property-details" className="property-holder"
                onClick={() => handleClick(id)}
                key={res.ListingID}>
                <div className="property-column">
                    <img className="property-img" src={img} alt={res.StreetNumber + " " + res.StreetName} />
                </div>
                <div className="property-detail-column">
                    <p className="property-price">
                        ${addCommas(res.ListPrice)}
                    </p>
                    <p className="property-city">
                    {res.StreetNumber} {res.StreetName} {res.city}, MS
                    </p>
                    <div className="property-row">
                        <p className="property-text">
                             {res.Bedrooms} bd
                        </p>
                        <p className="property-text">
                             {res.Baths} ba
                        </p>
                        <p className="property-text">
                             {res.LivingArea} sqft
                        </p>
                        <p className="property-text">
                             {res.LotSizeArea} Acres
                        </p>
                        <p className="property-text">
                             {res.Parking}
                        </p>                                   
                    </div>
                </div>
            </Link>
        )
    }
    function showColtmorProperties() {
        return retsData.data.results.filter(res => {
            if(res.ListAgentOfficeID === "COLT55") {
                console.log(res)
            }
            console.log(res.ListAgentOfficeID)
            if(res.ListAgentOfficeID === "COLT55") {
                return res;
            } else {
                return;
            }
        }).map(res => {
            return mapProperties(res)
        })
    }
    return (
        retsData ? 
        <div className="properties-page">
            <div className="property-container">
                {showColtmorProperties()}
            </div>
            <div className="property-container">
                {showProperties()}
            </div>
        </div>
        : 
        <div className="properties-page"></div> 
    )
}
