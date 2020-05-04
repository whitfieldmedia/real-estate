import React, { useEffect } from 'react';
import '../assets/css/form.css';

export default function TourForm() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <form className="contact-form">
          {error
          ? <p className="form-error">
              Please enter your name, email & phone number.
            </p>
          : null}
            <div className="input-holder">
                <label htmlFor="form_" className="form-label">
                    Name*
                    <input type="text"
                        className="input"
                        name="name"
                    />
                </label>
            </div>
            <div className="input-holder">
                <label htmlFor="form_email" className="form-label">
                    Email*
                    <input type="text"
                        className="input"
                        name="email"
                        />
                </label>
            </div>
            <div className="input-holder">
                <label htmlFor="form_phone" className="form-label">
                    Phone*
                    <input type="text"
                        className="input"
                        name="phone"
                    />
                </label>
            </div>
            <div className="input-holder">
                <label htmlFor="date" className="form-label">
                    Date
                    <input type="date"
                        className="date-input"
                        name="form_date"
                    />
                </label>
            </div>
            <div className="input-holder">
                <label htmlFor="form_message" className="form-label">
                    Message/Questions
                <input type="text"
                    className="input"
                    name="message"
                />
                </label>
            </div>
            <button className="contact-button">
                Send
                <i className="fas fa-paper-plane"></i>
            </button>
        </form>
    )
}
