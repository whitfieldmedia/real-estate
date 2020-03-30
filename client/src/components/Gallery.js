import React, { useState, useEffect } from 'react';
import img from '../assets/images/Coltmor_Realty_Grenada_The_City_That_Smiles.jpg';
import img1 from '../assets/images/Coltmor_Realty_House_Buyer.jpg';
import img2 from '../assets/images/Coltmor_Realty_House_Buyer2.jpg';
import img3 from '../assets/images/Coltmor_Realty_House_Buyer3.jpg';
import img4 from '../assets/images/Coltmor_Realty_House_Buyer4.jpg';
import img5 from '../assets/images/Coltmor_Realty_House_Buyer5.jpg';
import img6 from '../assets/images/Coltmor_Realty_House_Buyer6.jpg';
import img7 from '../assets/images/Coltmor_Realty_House_Buyer7.jpg';
import img8 from '../assets/images/Coltmor_Realty_House_Buyer8.jpg';
import img9 from '../assets/images/Coltmor_Realty_House_Buyer9.jpg';
import img10 from '../assets/images/Coltmor_Realty_House_Buyer10.jpg';
import img11 from '../assets/images/Coltmor_Realty_House_Buyer11.jpg';
import img12 from '../assets/images/Coltmor_Realty_House_Buyer12.jpg';
import img13 from '../assets/images/Coltmor_Realty_House_Buyer13.jpg';
import img14 from '../assets/images/Coltmor_Realty_House_Buyer14.jpg';
import img15 from '../assets/images/Coltmor_Realty_House_Buyer15.jpg';
import img16 from '../assets/images/Coltmor_Realty_Sold_House16.jpg';
import img17 from '../assets/images/Coltmor_Realty_House_Buyer17.jpg';
import img18 from '../assets/images/Coltmor_Realty_House_Buyer18.jpg';
import img19 from '../assets/images/Coltmor_Realty_Sold_House.jpg';
import img20 from '../assets/images/Coltmor_Realty_Sold_House2.jpg';
import img21 from '../assets/images/signing_contract.jpg';
import img22 from '../assets/images/Chris_Reed_Top_Shot_Campion.jpg';
import img23 from '../assets/images/Chris_Reed_Top_Shot_Campion2.jpg';
import img24 from '../assets/images/Chris_Reed_Family.jpg';
import img25 from '../assets/images/ChrisReed_IainHarrison_RLeeErmey.jpg';
import imgT from '../assets/images/Coltmor_Realty_Grenada_The_City_That_SmilesT.jpg';
import img1T from '../assets/images/Coltmor_Realty_House_BuyerT.jpg';
import img2T from '../assets/images/Coltmor_Realty_House_Buyer2T.jpg';
import img3T from '../assets/images/Coltmor_Realty_House_Buyer3T.jpg';
import img4T from '../assets/images/Coltmor_Realty_House_Buyer4T.jpg';
import img5T from '../assets/images/Coltmor_Realty_House_Buyer5T.jpg';
import img6T from '../assets/images/Coltmor_Realty_House_Buyer6T.jpg';
import img7T from '../assets/images/Coltmor_Realty_House_Buyer7T.jpg';
import img8T from '../assets/images/Coltmor_Realty_House_Buyer8T.jpg';
import img9T from '../assets/images/Coltmor_Realty_House_Buyer9T.jpg';
import img10T from '../assets/images/Coltmor_Realty_House_Buyer10T.jpg';
import img11T from '../assets/images/Coltmor_Realty_House_Buyer11T.jpg';
import img12T from '../assets/images/Coltmor_Realty_House_Buyer12T.jpg';
import img13T from '../assets/images/Coltmor_Realty_House_Buyer13T.jpg';
import img14T from '../assets/images/Coltmor_Realty_House_Buyer14T.jpg';
import img15T from '../assets/images/Coltmor_Realty_House_Buyer15T.jpg';
import img16T from '../assets/images/Coltmor_Realty_Sold_House16T.jpg';
import img17T from '../assets/images/Coltmor_Realty_House_Buyer17T.jpg';
import img18T from '../assets/images/Coltmor_Realty_House_Buyer18T.jpg';
import img19T from '../assets/images/Coltmor_Realty_Sold_HouseT.jpg';
import img20T from '../assets/images/Coltmor_Realty_Sold_House2T.jpg';
import img21T from '../assets/images/signing_contractT.jpg';
import img22T from '../assets/images/Chris_Reed_Top_Shot_CampionT.jpg';
import img23T from '../assets/images/Chris_Reed_Top_Shot_Campion2T.jpg';
import img24T from '../assets/images/Chris_Reed_FamilyT.jpg';
import img25T from '../assets/images/ChrisReed_IainHarrison_RLeeErmeyT.jpg';
import GridGallery from 'react-grid-gallery';
import '../assets/css/gallery.css';

export default function Gallery() {
    const [ images ] = useState([
        { src: `${img}`, thumbnail: `${imgT}`, thumbnailWidth: 450, thumbnailHeight: 300},
        { src: `${img1}`, thumbnail: `${img1T}`, thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img2}`, thumbnail: `${img2T}`, thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img3}`, thumbnail: `${img3T}`, thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img4}`, thumbnail: `${img4T}`,thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img5}`, thumbnail: `${img5T}`, thumbnailWidth: 400, thumbnailHeight: 300},
        { src: `${img6}`, thumbnail: `${img6T}`, thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img7}`, thumbnail: `${img7T}`, thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img8}`, thumbnail: `${img8T}`, thumbnailWidth: 400, thumbnailHeight: 300},
        { src: `${img9}`, thumbnail: `${img9T}`,  thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img10}`, thumbnail: `${img10T}`,  thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img11}`, thumbnail: `${img11T}`,  thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img12}`, thumbnail: `${img12T}`, thumbnailWidth: 225, thumbnailHeight: 300 },
        { src: `${img13}`, thumbnail: `${img13T}`,  thumbnailWidth: 191, thumbnailHeight: 300},
        { src: `${img14}`, thumbnail: `${img14T}`,  thumbnailWidth: 169, thumbnailHeight: 300},
        { src: `${img15}`, thumbnail: `${img15T}`,  thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img16}`, thumbnail: `${img16T}`, thumbnailWidth: 450, thumbnailHeight: 300},
        { src: `${img17}`, thumbnail: `${img17T}`,  thumbnailWidth: 266, thumbnailHeight: 300},
        { src: `${img18}`, thumbnail: `${img18T}`,  thumbnailWidth: 219, thumbnailHeight: 300},
        { src: `${img19}`, thumbnail: `${img19T}`, thumbnailWidth: 255, thumbnailHeight: 300 },
        { src: `${img20}`, thumbnail: `${img20T}`, thumbnailWidth: 399, thumbnailHeight: 300},
        { src: `${img21}`, thumbnail: `${img21T}`, thumbnailWidth: 450, thumbnailHeight: 300},
        { src: `${img22}`, thumbnail: `${img22T}`, thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img23}`, thumbnail: `${img23T}`, thumbnailWidth: 366, thumbnailHeight: 300},
        { src: `${img24}`, thumbnail: `${img24T}`, thumbnailWidth: 225, thumbnailHeight: 300},
        { src: `${img25}`, thumbnail: `${img25T}`, thumbnailWidth: 453, thumbnailHeight: 300},
    ])
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="gallery-page">
            <div className="gallery-container">
                <GridGallery images={images} id="grid-gallery" />
            </div>
        </div>
    )
}