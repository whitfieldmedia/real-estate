import React, { useEffect } from 'react'

export default function PropertyDetails () {
    const id = sessionStorage.getItem('propertyId')
    const retsData = JSON.parse(sessionStorage.getItem('retsData'));
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    console.log(retsData)
    function mapDetails () {
        return retsData.data.results.filter(res => res.ListingID === id).map(res => {
            const photos = res.PhotoCount;  
            return (
                <div className="detail-container">
                    <p className="detail-par">
                        {res.StreetNumber} {res.StreetName} {res.city}, MS
                    </p>
                    <p className="detail-price">
                        ${res.ListPrice}
                    </p>
                    <p className="detail-par">
                        {res.Bedrooms} Bedrooms
                    </p>
                    <p className="detail-par">
                        Lot Size: {res.LotSizeDim}    
                    </p>
                    <p className="detail-par">
                        Exterior: {res.Exterior}
                    </p>
                    <p className="detail-par">
                        Features: {res.Features}
                    </p>
                    <p className="detail-par">
                        Floors: {res.Floors}
                    </p>
                    <p className="detail-par">
                        Heating: {res.Heating}    
                    </p>
                    <p className="detail-par">
                        Parking: {res.Parking}
                    </p>
                    <p className="detail-par">
                        Details: {res.PublicRemarks}
                    </p>
                    <p className="detail-par">
                        Roof: {res.Roof} 
                    </p>
                    <p className="detail-par">
                        Roof Age: {res.RoofAge}
                    </p>
                    <p className="detail-par">
                        Stories: {res.Stories}
                    </p>                     
                    <p className="detail-par">
                        Year Built: {res.YearBuilt}
                    </p>                                                      
                    {getImages(id, photos)}
                </div>
            )
        })
    }
    function getImages(id, num) {
        var images = []
        for(var i = 0; i < num; i++) {
            var imgNum = i + 1
            if ( imgNum < 10) {
                imgNum = "0" + imgNum
            }
            var imgUrl = "http://www.promatchcomplete.com/pictures/GNMS/Listings/c/" + id + "-" + imgNum + ".jpg?Session=531000566"
            images.push(imgUrl)
        }
        return images.map(img => (
            <img src={`${img}`} alt="Coltmor Real Estate" className="detail_photos" />
        ))
    }
    return ( 
        <div className="detail-page">
            {mapDetails()}
        </div>
    )
}