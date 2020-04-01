import React, { useEffect, useState } from 'react';
import Gallery from 'react-grid-gallery';
import Form from './Form';
import TourForm from './TourForm';
import logoDark from '../assets/images/coltmor-realty.png';
import '../assets/css/details.css';

export default function PropertyDetails () {
    const [ images, setImages ] = useState([]);
    const [ isClicked, setIsClicked ] = useState(false)
    const [ isTourClicked, setIsTourClicked ] = useState(false)
    const id = sessionStorage.getItem('propertyId')
    const retsData = JSON.parse(sessionStorage.getItem('retsData'));
    useEffect(() => {
        window.scrollTo(0,0);
    })
    function handleClick() {
        setIsClicked(true)
    }
    function handleClose() {
        if(isTourClicked) {
            return setIsTourClicked(false)
        } 
        if(isClicked) {
            return setIsClicked(false)
        }
    }
    function handleTourClick() {
        return setIsTourClicked(true)
    }
    function setPhotos(num, alt) {
        var imgArray = []
        var count = Number(num)
        for(var i = 0; i < count; i++) {
            var imgNum = i + 1
            if ( imgNum < 10) {
                imgNum = "0" + imgNum
            }
            var imgUrl = "http://www.promatchcomplete.com/pictures/GNMS/Listings/B/" + id + "-" + imgNum + ".jpg?Session=531000566"
            var img = {
                src: imgUrl,
                thumbnail: imgUrl,
                thumbnailWidth: 320,
                thumbnailHeight: 225,
                alt: alt
            }
            imgArray.push(img);
        }
        if(imgArray.length === count && images.length !== count) {
            setImages(imgArray)
        }
    }
    function addCommas(num) {
        return (num + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    function mapDetails () {
        return retsData.data.results.filter(res => res.ListingID === id).map(res => {
            var num = res.PhotoCount;
            var alt = res.StreetNumber + " " + res.StreetName;
            setPhotos(num, alt)
            return(
                <div key={res.ListingID} className="detail-container">
                    <div className="detail-gallery-column">
                        <Gallery images={images} id="grid-gallery" rowHeight={225} enableImageSelection={false} />
                    </div>     
                    <div className="detail-column">
                        <div className="detail-sticky-container">
                            <p className="detail-price">
                                ${addCommas(res.ListPrice)}
                            </p>
                            <h1 className="detail-address">
                                {res.StreetNumber} {res.StreetName} {res.City}, MS
                            </h1>
                            <div className="detail-row">
                                <p className="detail-text">
                                    {res.Bedrooms} Bd
                                </p>
                                <p className="detail-text">
                                    {res.Baths} Ba
                                </p>
                                <p className="detail-text">
                                    {res.LivingArea} sqft
                                </p>
                            </div>
                            <div className="detail-cta-row">
                                <button onClick={handleClick} className="detail-contact-button">
                                    Contact Agent
                                </button>
                                <button onClick={handleTourClick} className="detail-tour-button">
                                    Take a Tour
                                </button>
                            </div>
                        </div>
                        <p className="detail-par">
                            {res.PublicRemarks}
                        </p>
                        <div className="detail-facts-container">
                            <h3 className="detail-header3">
                                Interior Details
                            </h3>
                            <div className="sub-fact-holder">
                                <div className="sub-fact-column">
                                    <h4 className="detail-header4">
                                        Bedrooms and Bathrooms
                                    </h4>
                                    <ul className="detail-list">
                                        <li className="detail-list-item">
                                            Rooms: {res.TotalRooms}
                                        </li>
                                        <li className="detail-list-item">
                                            Bedrooms: {res.Bedrooms}
                                        </li>
                                        <li className="detail-list-item">
                                            Bathrooms: {res.Baths}
                                        </li>
                                        <li className="detail-list-item">
                                            3/4 Bathrooms: {res.BathsThreeQuarter}    
                                        </li>
                                        <li className="detail-list-item">
                                            1/2 Bathrooms: {res.BathsHalf}    
                                        </li>
                                    </ul>
                                </div>
                                <div className="sub-fact-column">
                                    <h4 className="detail-header4">
                                        Flooring
                                    </h4>
                                    <ul className="detail-list">
                                        <li className="detail-list-item">
                                            Flooring: {res.Floors}
                                        </li>
                                    </ul>
                                </div>
                                <div className="sub-fact-column">
                                    <h4 className="detail-header4">
                                        Heating: 
                                    </h4>
                                    <ul className="detail-list">
                                        <li className="detail-list-item">
                                            Heating: {res.Heating}    
                                        </li>
                                    </ul>
                                </div>
                                <div className="sub-fact-column">
                                    <h4 className="detail-header4">
                                        Cooling:
                                    </h4>
                                    <ul className="detail-list">
                                        <li className="detail-list-item">
                                            Cooling: {res.Cooling}
                                        </li>
                                    </ul>
                                </div>
                                <div className="sub-fact-column">
                                    <h4 className="detail-header4">
                                        Appliances  
                                    </h4>
                                    <ul className="detail-list">
                                        <li className="detail-list-item">
                                            Appliances: {res.AppliancesThatStay}
                                        </li>
                                    </ul>
                                </div>
                                <div className="sub-fact-column">
                                    <h4 className="detail-header4">
                                        Other Interior Features  
                                    </h4>
                                    <ul className="detail-list">
                                        <li className="detail-list-item">
                                            Livable Area: {res.LivingArea} square feet
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="detail-header3">
                                Property Details
                            </h3>
                            <div className="sub-fact-holder">
                                <div className="sub-fact-column">
                                    <h4 className="detail-header4">
                                        Property
                                    </h4>
                                    <ul className="detail-list">
                                        <li className="detail-list-item">
                                            Lot Size: {res.LotSizeArea} Acres
                                        </li>
                                        <li className="detail-list-item">
                                            Stories: {res.Stories} 
                                        </li>
                                        <li className="detail-list-item">
                                            Exterior: {res.Exterior}
                                        </li>
                                        <li className="detail-list-item">
                                            Other Buildings: {res.OtherBuildings}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="detail-header3">
                                Construction Details
                            </h3>
                            <div className="sub-fact-holder">
                                <div className="sub-fact-column">
                                    <h4 className="detail-header4">
                                        Material Information
                                    </h4>
                                    <ul className="detail-list">
                                        <li className="detail-list-item">
                                            Foundation: {res.Foundation}
                                        </li>
                                        <li className="detail-list-item">
                                            Floors: {res.Floors}
                                        </li>
                                        <li className="detail-list-item">
                                            Roof: {res.Roof}
                                        </li>
                                        <li className="detail-list-item">
                                            Roof Age: {res.RoofAge} years
                                        </li>
                                        <li className="detail-list-item">
                                            Exterior: {res.Exterior}
                                        </li>
                                        <li className="detail-list-item">
                                            Windows: {res.Windows}
                                        </li>
                                    </ul>
                                </div>
                                <div className="sub-fact-column">
                                    <h4 className="detail-header4">
                                        Condition  
                                    </h4>
                                    <ul className="detail-list">
                                        <li className="detail-list-item">
                                            Property Condition: {res.PropertyCondition}
                                        </li>
                                        <li className="detail-list-item">
                                            Year Built: {res.YearBuilt}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            )
        })
    }
    return ( 
        <div className="detail-page">
            {mapDetails()}
            {isClicked
            ?
            <div className="home-popup-form">
                <div className="popup-form-wrapper" id="popup-wrapper">
                <div className="close-popup" onClick={handleClose}>
                    X
                </div>
                    <h2 className="popup-header">
                        Contact Your Local Area Expert
                    </h2>
                    <div className="popup-row">
                        <div className="popup-column">
                            <p className="popup-par">
                                Chris Reed
                            </p>
                            <a href="tel:6622297003" className="popup-par">
                                (662) 229-7003
                            </a>
                            <p className="popup-par">
                                330 Longwood Drive <br/>
                                Grenada, Ms 38901
                            </p>
                            <img src={logoDark} className="popup-logo" alt="Coltmor Realty - Grenada, Ms"/>
                        </div>
                        <div className="popup-column">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
            : null}
            {isTourClicked
            ?
            <div className="home-popup-form">
                <div className="popup-form-wrapper" id="popup-wrapper">
                <div className="close-popup" onClick={handleClose}>
                    X
                </div>
                    <h2 className="popup-header">
                        Schedule a Tour
                    </h2>
                    <div className="popup-row">
                        <div className="popup-column">
                            <p className="popup-par">
                                Chris Reed
                            </p>
                            <a href="tel:6622297003" className="popup-par">
                                (662) 229-7003
                            </a>
                            <p className="popup-par">
                                330 Longwood Drive <br/>
                                Grenada, Ms 38901
                            </p>
                            <img src={logoDark} className="popup-logo" alt="Coltmor Realty - Grenada, Ms"/>
                        </div>
                        <div className="popup-column">
                            <TourForm />
                        </div>
                    </div>
                </div>
            </div>
            : null}
        </div>
    )
}