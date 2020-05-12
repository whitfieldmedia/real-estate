import React from 'react';
import logo from '../assets/images/coltmor-realty-logo.png';
import realtor from '../assets/images/realtor.png';
import zillow from '../assets/images/zillow_logo.png';
import eho from '../assets/images/fheo125.png';
import realtorLogo from '../assets/images/web_R_blk.jpg';
import { Link } from 'react-router-dom'
import '../assets/css/footer.css';

export default function Footer() {
    return(
        <footer>
            <div className="footer-row">
                <div className="footer-logo-column">
                    <Link to="/" className="footer-logo-holder">
                        <img src={logo} className="footer-logo" alt="Coltmor Realty"/>
                    </Link>
                    <a href="tel:6622297003" className="footer-logo-phone">
                        (662) 229-7003
                    </a>
                </div>
                <div className="footer-column">
                    <div className="footer-text-row">
                        <p className="footer-text">
                            Cell:
                        </p>
                        <a href="tel:9313748131" className="footer-link">
                            (931) 374-8131
                        </a>
                    </div>
                    <div className="footer-text-row">
                        <p className="footer-text">
                            Office: 
                        </p>
                        <a href="tel:6622297003" className="footer-link">
                            (662) 229-7003
                        </a>
                    </div>
                    <div className="footer-text-row">
                        <p className="footer-text">
                            Email:
                        </p>
                        <a href="mailto:chris@coltmor.com" className="footer-link">
                            Chris@Coltmor.com
                        </a>
                    </div>
                    <div className="footer-text-row">
                        <p className="footer-text">
                            Address:
                        </p>
                        <a href="https://www.google.com/maps/place/Coltmor+Realty/@33.7388493,-89.8008594,17z/data=!3m1!4b1!4m5!3m4!1s0x8881c9425f3fae81:0xb0ad267d8f73e8c2!8m2!3d33.7388493!4d-89.7986654"
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="footer-link">
                            330 Longwood Drive <br/> Grenada, Ms 38901
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-social-row">
                <a className="footer-social" 
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/ColtmorRealty/">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a className="footer-social" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    href="https://twitter.com/ColtmorRealty">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className="footer-social"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/chris-reed-57916433/">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="footer-social"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.yelp.com/biz/coltmor-realty-grenada">
                    <i className="fab fa-yelp"></i>
                </a>
                <a className="footer-social" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    href="https://www.zillow.com/profile/Chris41858/">
                    <img src={zillow} className="footer-social-logo" alt="Zillow.com"/>
                </a>
                <a  className="footer-social" 
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.realtor.com/realestateagents/chris-reed___3329936_334999864">
                <img src={realtor} className="footer-social-logo" alt="Realtor.com"/>
                </a>
            </div>
            <div className="footer-social-row">
                <div className="footer-logo2">
                    <img className="footer-eho" src={eho} alt="equal housing opportunity"/>
                </div>
                <img src={realtorLogo} className="footer-logo2" alt="Realtor"/>
            </div>
            <div className="footer-row">
                <p className="footer-disclaimer">
                    @2020 <strong> Coltmor Realty </strong> all rights reserved. 
                    Built by 
                    <a className="footer-disclaimer-link" 
                        href="https://www.wemakeads.com" 
                        target="_blank" 
                        rel="noopener noreferrer"> 
                        Whitfield Media 
                    </a>
                </p>
            </div>
        </footer>
    )
}