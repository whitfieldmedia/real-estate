import React, { useEffect, useState } from 'react';
import logo from '../assets/images/coltmor_realty_logo.png';
import logoDark from '../assets/images/coltmor-realty.png';
import Chris from '../assets/images/Coltmor_Realty_Grenada_The_City_That_Smiles.jpg';
import Form from './Form';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const retsData = JSON.parse(sessionStorage.getItem('retsData'))
    const [ isClicked, setIsClicked ] = useState(false)
    const [ count, setCount ] = useState(0)
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 2125, min: 1700 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 1700, min: 1275 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1275, min: 850 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 850, min: 0 },
          items: 1,
        },
      };
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    function handlePrev() {
        if(count > 0) {
            setCount(count - 1)
        } else {
            setCount(4)
        }
    }

    function handleNext() {
        if(count < 4) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }

    const handleClick = () => {
        setIsClicked(true)
    }

    const handleClose = () => {
        return setIsClicked(false)
    }
    function addCommas(num) {
        return (num + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    function setPropertyId(id) {
        sessionStorage.setItem('propertyId', id)
    }
    function featuredProperties() {
        return retsData.data.results.filter(res => res.ListAgentOfficeID === "COLT55").map(res => {
            
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
                        {res.StreetNumber} {res.StreetName} {res.city}, MS
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
                            <p className="home-property-text">
                                {res.Parking}
                            </p>                                   
                        </div>
                    </div>
                </Link>
            )
        })
    }
    return (
        <div className="home-page">
            <header className="home-hero-wrapper">
                <img src={logo} className="home-hero-logo" alt="Coltmor Realty Co."/>
                <h2 className="home-header">
                    Going the extra mile to make buying and selling real estate a breeze.
                </h2>
                <div className="home-hero-link"
                    onClick={handleClick}>
                    Find your next home
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
                        <img src={Chris} className="home-img" alt="Coltmor Realty Welcome to Grenada Ms"/>
                    </div>
                </div>
            </div>
            <div className="home-listing-container">
                <h2 className="home-header2">
                    Featured Listings
                </h2>
                <Carousel responsive={responsive} centerMode={false} className="home-featured-holder">
                    {featuredProperties()}
                </Carousel>
            </div>
            <div className="home-review-container">
                <div className="arrow" onClick={handlePrev}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className={count === 0 ? "home-review-box" : "none"}>
                    <div className="home-review-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p className="home-review">
                        "I just wanted to say Thank You again for all you did to help us in buying a home. I would definitely recommend you to anyone looking to buy a home. Your honesty and integrity were very much appreciated."
                    </p>
                </div>
                <div className={count === 1 ? "home-review-box" : "none"}>
                    <div className="home-review-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p className="home-review">
                        "I would definitely use Chris again! He works hard to make your experience as easy as possible. It was easy to get in touch with him when I had questions. He was always eager to help in any way he could. Thank you Chris, for selling our house."
                    </p>
                </div>
                <div className={count === 2 ? "home-review-box" : "none"}>
                    <div className="home-review-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p className="home-review">
                        "I just got off the phone with Chris and he was very informational  in the decision of buying my mother a new home he also was very helpful with mapping and distance information. Thank you so much  i’m very excited to start my new search for my mom and New home"
                    </p>
                </div>
                <div className={count === 3 ? "home-review-box" : "none"}>
                    <div className="home-review-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p className="home-review">
                        "I was looking for a house in Grenada, MS. On Zillow. They gave Chris Reed’s profile which showed all his strengths in re estate. I had already terminated (2) other Buyer agents for not communicating and waiting on me to do all the work. Chris went above and beyond finding me a home. He took care of  all the little details as well as the large ones. Even after the sale he was help me get around in a new town telling me where to shop for different needs. I am very thankful for having Chris as my agent and now a friend."
                    </p>
                </div>
                <div className={count === 4 ? "home-review-box" : "none"}>
                    <div className="home-review-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p className="home-review">
                        "Chris was relentless in his attempt to help us find a house. If he saw or heard of anything coming on the market he would let me know immediately. He was honest with us even when it meant he wouldn't make as much money off the sale. I could contact him any time day or night and he always seemed to  be willing to work around our schedule when viewing a home. I would definitely recommend giving him a try if you are looking for a realtor."
                    </p>
                </div>
                <div className={count === 5 ? "home-review-box" : "none"}>
                    <div className="home-review-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p className="home-review">
                        "Great to work with!! <br/>
                        Very responsive, over and above to take care of clients! He was a pleasure to work with and really helped make this process easy. <br/>
                        Thanks for all you did!!!"
                    </p>
                </div>
                <div className="arrow" onClick={handleNext}>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
            <div className="home-row">
                <div className="home-form-holder">
                    <h2 className="home-header2">
                        Contact Us
                    </h2>
                    <Form />
                </div>
            </div>
        </div>
    )
}
