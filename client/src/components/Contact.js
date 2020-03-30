import React, { useEffect } from 'react';
import Form from './Form';
import '../assets/css/contact.css';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
    return (
        <div className="contact-page">
            <div className="contact-row">
                <div className="contact-header-container">
                    <h1 className="contact-header">
                        Contact Coltmor Realty
                    </h1>
                    <h2 className="contact-header2">
                        Exemplary & helpful service is guaranteed.
                    </h2>
                    <p className="contact-text">
                        Our goal is to be informative and helpful.  We hope to earn your business with our exemplary service and extensive knowledge in the Grenada Area.
                    </p>
                    <p className="contact-text">
                        If you have any questions or are interested in buying/selling a home feel free to reach out.
                    </p>
                    <div className="contact-info-container">
                            <a className="contact-info" href="tel:9313748131">
                                (931) 374-8131
                            </a>
                            <a className="contact-info" href="tel:6622297003">
                                (662) 229-7003
                            </a>
                            <a className="contact-info" href="mailto:chris@coltmor.com">
                                Chris@Coltmor.com
                            </a>
                            <a className="contact-info"
                                href="https://www.google.com/maps/place/Coltmor+Realty/@33.7388493,-89.8008594,17z/data=!3m1!4b1!4m5!3m4!1s0x8881c9425f3fae81:0xb0ad267d8f73e8c2!8m2!3d33.7388493!4d-89.7986654"
                                rel="noopener noreferrer">
                                330 Longwood Drive, <br/> Grenada, MS 38901
                            </a>
                    </div>
                    <div className="contact-form-holder">
                        <Form />
                    </div>
                </div>

            </div>
        </div>
    )
}
