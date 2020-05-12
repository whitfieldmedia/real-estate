import React, { useEffect, useState } from 'react';
import Form from './Form';
import TourForm from './TourForm';
import logoDark from '../assets/images/coltmor-realty.png';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../assets/css/details.css';

export default function PropertyDetails () {
    const [ images, setImages ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ isClicked, setIsClicked ] = useState(false)
    const [ isTourClicked, setIsTourClicked ] = useState(false)
    const id = localStorage.getItem('propertyId')
    const data = JSON.parse(localStorage.getItem('data'));
    useEffect(() => {
        window.scrollTo(0,0);
        if(data) {
            setIsLoaded(true)
        } 
    }, [data])
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
    function mapDetails () {
        return data.results.filter(res => res.ListingID === id).map(res => {
            var num = res.PhotoCount;
            var alt = res.StreetNumber + " " + res.StreetName;
            setPhotos(num, alt)
            if(res.PropertyType === "LotsAndLand") {
                return (
                    <div key={res.ListingID} className="detail-container">
                    {/* <GetPhotos id={res.ListingID} count={res.PhotoCount} /> */}
                    <CarouselProvider 
                        className="carousel-container"
                        naturalSlideHeight={2}
                        naturalSlideWidth={3}
                        totalSlides={num}>
                            <Slider>
                                {images.map((img, index) => {
                                    return (
                                        <Slide className="carousel-img-holder" key={img.src} index={index}>
                                            <Image className="carousel-img" src={img.src} alt={img.alt} />
                                        </Slide>
                                    )
                                })}
                        </Slider>
                        <ButtonBack className="back-button"></ButtonBack>
                        <ButtonNext className="next-button"></ButtonNext>
                    </CarouselProvider>
                    <div className="detail-column">
                        <div className="detail-sticky-container">
                            <p className="detail-price">
                                ${addCommas(res.ListPrice)}
                            </p>
                            <h1 className="detail-address">
                                {res.StreetNumber} {res.StreetName} {Number(res.City) > 0 ? res.County : res.City}, MS
                            </h1>
                            <div className="detail-row">
                                <p className="detail-text">
                                    {lotSize(res.LotSizeDim)}
                                </p>
                            </div>
                            <p className="detail-par">
                                {res.ListingStatus} {split(res.PropertyType)}
                            </p>
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
                                Improvements 
                            </h3>
                            <p className="detail-par">
                                {res.improvements}
                            </p>
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
                                            Existing Structures: {res.ExistingStructures}
                                        </li>
                                        <li className="detail-list-item">
                                            Other Buildings: {res.OtherBuildings}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                        <h3 className="detail-header4">
                            Listing Provided By
                        </h3>
                        <p className="detail-par">
                            {res.ListAgentFirstName} {res.ListAgentLastName}
                        </p>
                        <p className="detail-par">
                            {res.ListOfficeName}
                        </p>
                        <p className="detail-par">
                            {res.ListAgentOfficePhone}
                        </p>
                        <p className="detail-par">
                            MLS Disclaimer: Copyright Grenada Board of Realtors. All rights reserved. Information is deemed reliable but not guaranteed.
                        </p>
                    </div>
                </div>
                )
            }
            return(
                <div key={res.ListingID} className="detail-container">
                    {/* <GetPhotos id={res.ListingID} count={res.PhotoCount} /> */}
                    <CarouselProvider 
                        className="carousel-container"
                        naturalSlideHeight={2}
                        naturalSlideWidth={3}
                        totalSlides={num}>
                            <Slider>
                                {images.map((img, index) => {
                                    return (
                                        <Slide className="carousel-img-holder" key={img.src} index={index}>
                                            <Image className="carousel-img" src={img.src} alt={img.alt} />
                                        </Slide>
                                    )
                                })}
                        </Slider>
                        <ButtonBack className="back-button"></ButtonBack>
                        <ButtonNext className="next-button"></ButtonNext>
                    </CarouselProvider>
                    <div className="detail-column">
                        <div className="detail-sticky-container">
                            <p className="detail-price">
                                ${addCommas(res.ListPrice)}
                            </p>
                            <h1 className="detail-address">
                                {res.StreetNumber} {res.StreetName} {Number(res.City) > 0 ? res.County : res.City}, MS
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
                            <p className="detail-par">
                                {res.ListingStatus} {split(res.PropertyType)}
                            </p>
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
                        <h3 className="detail-header4">
                            Listing Provided By
                        </h3>
                        <p className="detail-par">
                            {res.ListAgentFirstName} {res.ListAgentLastName}
                        </p>
                        <p className="detail-par">
                            {res.ListOfficeName}
                        </p>
                        <p className="detail-par">
                            {res.ListAgentOfficePhone}
                        </p>
                        <p className="detail-par">
                            MLS Disclaimer: Copyright Grenada Board of Realtors. All rights reserved. Information is deemed reliable but not guaranteed.
                        </p>
                    </div>
                </div>
            )
        })
    }
    return ( 
        isLoaded 
        ?
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
        : 
        <div className="property-page">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}