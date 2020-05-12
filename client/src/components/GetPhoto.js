import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GetPhoto(props) {
    const [ url, setUrl ] = useState('')
    const [ loaded, setLoaded ] = useState(false)
    var id = props.id;
    useEffect(() => {
        axios.get('/propertyData/photo', {
            params: {
                id: id
            }
        }).then(res => {
            setUrl(res.data)
            return setLoaded(true)
        }).catch(err => {
            console.log(err)
        })
    })
    return (
        loaded ?
        <img className="home-property-img" src={url + "?auto=compress"} alt={id} />
        : null
    )
}