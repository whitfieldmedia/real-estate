import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

export default function Mapbox(props) {
    const localState = JSON.parse(sessionStorage.getItem('retsData'));
    function handleClick (id) {
        props.isClicked(id)
        return sessionStorage.setItem('topProperty', `${id}`)
    }
    useEffect(() => {
        if(!sessionStorage.topProperty){
        sessionStorage.setItem('topProperty', 0)
        }
    },[])

    return (
        <div style={{ height: '100%', width: '60vw' }}>
            <GoogleMapReact id="map" 
                bootstrapURLKeys={{ key: 'AIzaSyAIh5iYOvtO91K3_r0_5kXglF4Tm1C8Jho' }}
                google={props.google} 
                defaultZoom={10}
                yesIWantToUseGoogleMapApiInternals
                onChildClick={(id) => handleClick(id)}
                defaultCenter={{
                    lat: 33.738843,
                    lng: -89.798640
                }}>
                {localState.data.results.map(res => {
                    var lat = Number(res.Latitude);
                    var lng = Number(res.Longitude);
                    return (
                        <div
                            style={{
                                position: "relative",
                                width: "18px",
                                height: "18px",
                                backgroundColor: "#000",
                                border: "2px solid #fff",
                                borderRadius: "100%",
                                userSelect: "none",
                                cursor: `${props => (props.onClick ? 'pointer' : 'default')}`,
                                zIndex: 1
                            }}
                            className="map-marker"
                            onClick={(id) => handleClick(id) }
                            key={res.ListingID}
                            text={res.StreetNumber + " " + res.StreetName}
                            lat={lat}
                            lng={lng}
                        />
                    )})}
            </GoogleMapReact>
        </div>
    )
}