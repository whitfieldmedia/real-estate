import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import axios from 'axios'

export default function getPhotos(props) {
    const [ url, setUrl ] = useState('')
    // const [ loaded, setLoaded ] = useState(false)
    const [ images, setImages ] = useState([])
    var id = props.id;
    var count = props.count;
    useEffect(() => {
        getImages()
    },[])
    function getImages() {
        var imgArray = []
        for(var i = 0; i < count; i++) {
            var imgNum = i + 1;
            if ( imgNum < 10) {
                imgNum = "0" + imgNum
            }
            axios.get('/propertyData/photos', {
                params: {
                    id: id,
                    index: imgNum
                }
            }).then(res => {
                imgArray.push(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
        console.log(imgArray)
        if(imgArray.length === count - 1) {
            console.log(imgArray)
            return setImages(imgArray);
        }
    }
    return (
        <div>
            {images.length > 1 ?
            <CarouselProvider 
            className="carousel-container"
            naturalSlideHeight={2}
            naturalSlideWidth={3}
            totalSlides={num}>
                <Slider>
                    {images.map((img, index) => (
                            <Slide className="carousel-img-holder" key={index} index={index}>
                                <Image className="carousel-img" source={img} alt={index} />
                            </Slide>
                        )
                    )}
                </Slider>
                <ButtonBack className="back-button"></ButtonBack>
                <ButtonNext className="next-button"></ButtonNext>
            </CarouselProvider>
            : null}
        </div>
    )
}