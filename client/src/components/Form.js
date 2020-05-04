import React, { useEffect } from 'react';
import '../assets/css/form.css';

export default function Form() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <form className="contact-form">
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
    )
}
