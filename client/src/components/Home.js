import React, { useEffect, useState } from 'react';
import logo from '../assets/images/coltmor_logo.png';
import logoDark from '../assets/images/coltmor-realty.png';
import background from '../assets/images/coltmor-realty-background-long.jpg';
import house from '../assets/images/round1.jpg';
import house2 from '../assets/images/round2.jpg';
import Reviews from './Reviews';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const cities = JSON.parse(localStorage.getItem('cities'))
    const data = JSON.parse(localStorage.getItem('data'))
    const [ isClicked, setIsClicked ] = useState(false)
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ address, setAddress ] = useState('')
    const [ sell, setSell ] = useState(true)
    const [ city, setCity ] = useState('')
    const responsive = {
        extraLargeDesktop: {
            breakpoint: { max: 5000, min: 2200 },
            items: 5
        },
        superLargeDesktop: {
          breakpoint: { max: 2200, min: 1700 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 1700, min: 1200 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1200, min: 700 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
        },
      };
    useEffect(() => {
        window.scrollTo(0,0);
        if(data) {
            setIsLoaded(true)
        } 
    }, [data])
    const handleClose = () => {
        return setIsClicked(false)
    }
    function addCommas(num) {
        return (num + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    function setPropertyId(id) {
        localStorage.setItem('propertyId', id)
    }
    function lotSize(str) {
        if(str.split(' ')[1] === 'Acres') {
            return str;
        } else {
            return str + ' Acres'
        }
    }

    function split(str) {
        return str.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")
    }
    function featuredProperties() {
        return data.results.filter(res => res.ListAgentOfficeID === "COLT55").sort((a, b) => b.ListPrice-a.ListPrice).map(res => {
            var url = `http://www.promatchcomplete.com/pictures/GNMS/Listings/b/${res.ListingID}-01.jpg?Session=531000566`
            if(res.PropertyType === "LotsAndLand") {
                return (
                    <Link to={`/property-details/${res.ListingID}`} onClick={() => setPropertyId(res.ListingID)} className="home-property-holder" key={res.ListingID}>
                        <div className="home-property-img-holder">
                            <img src={url} className="home-property-img" alt={res.ListingID} />
                        </div>
                        <div className="home-property-row">
                            <p className="home-price">
                                ${addCommas(res.ListPrice)}
                            </p>
                            <p className="home-property-text">
                                {lotSize(res.LotSizeDim)}
                            </p>                     
                        </div>
                        <p className="home-property-city">
                            {res.StreetNumber} {res.StreetName} {Number(res.City) > 0 ? res.County : res.City}, MS {res.PostalCode}
                        </p>
                        <p className="home-property-par">
                            {res.ListingStatus} {split(res.PropertyType)}
                        </p>
                    </Link>
                )
            } else {
                return (
                    <Link to={`/property-details/${res.ListingID}`} onClick={() => setPropertyId(res.ListingID)} className="home-property-holder" key={res.ListingID}>
                        <div className="home-property-img-holder">
                            <img src={url} className="home-property-img" alt={res.ListingID} />
                        </div>
                        <div className="home-property-row">
                            <p className="home-price">
                                ${addCommas(res.ListPrice)}
                            </p>
                            <p className="home-property-text">
                                {res.Bedrooms} bd
                            </p>
                            <p className="home-property-text">
                                {res.Baths} ba
                            </p>
                            <p className="home-property-text">
                                {res.LivingArea} sqft
                            </p>                     
                        </div>
                        <p className="home-property-city">
                            {res.StreetNumber} {res.StreetName} {res.City}, MS {res.PostalCode}
                        </p>
                        <p className="home-property-par">
                            {res.ListingStatus} {split(res.PropertyType)}
                        </p>
                    </Link>
                )
            }
        })
    }
    function handleSubmit() {
        localStorage.setItem('sort', 'city')
        localStorage.setItem('city', city)
    }
    function handleAddressChange(e) {
        e.preventDefault();
        setAddress(e.target.value)
    }
    return (
        <div className="home-page">
            <header className="home-hero-wrapper">
                <img src={background} className="home-hero" alt="Coltmor Realty Co."/>
                <div className="home-hero-mid" />
                <img src={logo} className="home-hero-logo" alt="Coltmor Realty Co."/>
                <h2 className="home-header">
                    Serving Grenada Ms and the Surrounding Areas.
                </h2>
                <div className="home-bs-wrapper">
                    <div className="home-bs-row">
                        <div onClick={() => setSell(true)} className={sell ? "home-bs-selected" : "home-bs-select"}>
                            Sell Your Home
                        </div>
                        <div onClick={() => setSell(false)} className={sell ? "home-bs-select" : "home-bs-selected"}>
                            Buy a Home
                        </div>
                    </div>
                    {sell ? 
                    <div className="home-sell-row">
                        <input type="text"
                            className="home-address-input"
                            name="address"
                            value={address}
                            onChange={(e) => handleAddressChange(e)}
                            placeholder="Address, City, State & Zip"
                        />
                        <button className="home-sell-button" onClick={() => setIsClicked(true)}> Sell Your Home </button>
                        <button className="home-sell-button2" onClick={() => setIsClicked(true)}>  
                            <span className="material-icons"> search </span>
                        </button>
                    </div>
                    : 
                    <form className="home-sell-row">
                        <select className="city-dropdown" onChange={(e) => setCity(e.target.value)}>
                            <option className="city-dropdown-value"> Select a City </option>
                            <option defaultValue="all" defaultChecked="All"> All </option>
                            {cities.map(city => (
                                <option key={city} className="city-dropdown-value" value={city}> {city} </option>
                            ))}
                        </select>
                        <Link className="home-sell-button" to="/properties" onClick={() => handleSubmit()}> Find Your Home </Link>
                        <Link className="home-sell-button2" to="/properties" onClick={() => handleSubmit()}>  
                            <span className="material-icons"> search </span>
                        </Link>
                    </form>
                    }
                </div>
            </header>
            {isClicked
            ?
            <div className="home-popup-form">
                <div className="popup-form-wrapper" id="popup-wrapper">
                <div className="close-popup" onClick={handleClose}>
                    X
                </div>
                    <h2 className="popup-header">
                        Contact your local expert Chris Reed.
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
                        <form className="contact-form" action="https://formspree.io/chris@coltmor.com" method="POST">
                            <div className="input-holder">
                                <label htmlFor="form_name" className="form-label">
                                    Name*
                                </label>
                                <input type="text"
                                    className="input"
                                    name="name"
                                />
                            </div>
                            <div className="input-holder">
                                <label htmlFor="form_email" className="form-label">
                                    Email*
                                </label>
                                <input type="text"
                                    className="input"
                                    name="email"
                                />
                            </div>
                            <div className="input-holder">
                                <label htmlFor="form_phone" className="form-label">
                                    Phone*
                                </label>
                                <input type="text"
                                    className="input"
                                    name="phone"
                                />
                            </div>
                            <div className="input-holder">
                                <label htmlFor="form_address" className="form-label">
                                    Address*
                                </label>
                                <input type="text"
                                    value={address}
                                    className="input"
                                    name="address"
                                />
                            </div>
                            <div className="input-holder">
                                <label htmlFor="form_message" className="form-label">
                                    Comments
                                </label>
                                <input type="text"
                                    className="input"
                                    name="message"
                                />
                            </div>
                            <button className="contact-button">
                                Send
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            : null}
            <div className="home-image-row">
                <div className="home-image-holder" onClick={() => setIsClicked(true)}>
                    <img src={house} className="home-round-house" alt="Sell Your Home"/>
                    <p className="home-round-par"> Sell Your Home </p>
                </div>
                <Link to="/properties" className="home-image-holder">
                    <img src={house2} className="home-round-house" alt="Buy a Home"/>
                    <p className="home-round-par"> Buy a Home </p>
                </Link>
            </div>
            <div className="home-listing-container">
                <h2 className="home-header2">
                    Featured Listings
                </h2>
                {isLoaded ?                 
                <Carousel responsive={responsive} centerMode={false} className="home-featured-holder">
                    {featuredProperties()}
                </Carousel>
                : <div className="home-property-container"></div>}
            </div>
            <div className="home-about-section">
                <h2 className="home-header2">
                    Buy & Sell Real Estate in Grenada, Ms with Coltmor Realty.
                </h2>
                <div className="home-row">
                    <div className="home-column">
                        <p className="home-par">
                            A great real estate agent can be the difference between a sound investment and a missed opportunity. When it's time to buy or sell, folks in North Central Mississippi know Chris Reed is the man for the job. Chris calls upon a decade of real estate experience and unmatched local expertise to make every transaction hassle-free. As a Marine Corps veteran, he takes pride in helping local service members find the perfect place to call home. He’s also an avid marksman and Top Shot champion who knows how to thrive under pressure, so you can always count on his attention to detail. Don’t miss your shot at the perfect home -- give Chris Reed of Coltmor Realty a call today.
                        </p>
                    </div>
                    <div className="home-column">
                        <iframe className="home-video" title="Coltmor Realty - A Realtor you can depend on." src="https://player.vimeo.com/video/405217984" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <Reviews />
        </div>
    )
}
