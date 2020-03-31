import React, { useEffect, useState } from 'react';
import Gallery from 'react-grid-gallery';
import thermometer from '../assets/icons/thermometer.svg';
import lot from '../assets/icons/region.svg';
import '../assets/scss/details.scss';

export default function PropertyDetails () {
    const [images, setImages] = useState([])
    const id = sessionStorage.getItem('propertyId')
    const retsData = JSON.parse(sessionStorage.getItem('retsData'));
    useEffect(() => {
        window.scrollTo(0,0);
        setPhotos();
    }, [])
    function setPhotos() {
        var num;
        var alt;
        retsData.data.results.filter(res => res.ListingID === id).map(res => {
            num = res.PhotoCount
            return alt = res.StreetNumber + " " + res.StreetName
        })
        var imgArray = []
        for(var i = 0; i < num; i++) {
            var imgNum = i + 1
            if ( imgNum < 10) {
                imgNum = "0" + imgNum
            }
            var imgUrl = "http://www.promatchcomplete.com/pictures/GNMS/Listings/B/" + id + "-" + imgNum + ".jpg?Session=531000566"
            var img = {
                src: imgUrl,
                thumbnail: imgUrl,
                thumbnailWidth: '50%',
                thumbnailHeight: 'auto',
                alt: alt
            }
            imgArray.push(img);
        }
        return setImages(imgArray)
    }
    function addCommas(num) {
        return (num + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    function mapDetails () {
        return retsData.data.results.filter(res => res.ListingID === id).map(res => {
            return (
                <div className="detail-container">
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
                                <button className="detail-contact-button">
                                    Contact Agent
                                </button>
                                <button className="detail-tour-button">
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
        </div>
    )
}