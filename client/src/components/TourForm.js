import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/form.css';

export default function TourForm() {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ error, setError ] = useState(false)
    const [ date, setDate ] = useState('')
    function handleSubmit(e) {
      e.preventDefault()
      if(name.length > 0 && email.length > 0 && phone.length > 0) {
        axios({
            method: "POST",
            url: "/contact",
            data: {
                name: name,
                email: email,
                phone: phone,
                date: date,
                message: message
            }
        })
        setName('')
        setEmail('')
        setPhone('')
        setDate('')
        setMessage('')
        return;
      }
      else {
        setError(true)
        return;
      }
    }

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
                <label htmlFor="name" className="form-label">
                    Name*
                    <input type="text"
                        className="input"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <div className="input-holder">
                <label htmlFor="email" className="form-label">
                    Email*
                    <input type="text"
                        className="input"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
            </div>
            <div className="input-holder">
                <label htmlFor="phone" className="form-label">
                    Phone*
                    <input type="text"
                        className="input"
                        value={phone}
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)} />
                </label>
            </div>
            <div className="input-holder">
                <label htmlFor="date" className="form-label">
                    Date
                    <input type="date"
                        className="date-input"
                        value={date}
                        name="date"
                        onChange={(e) => setDate(e.target.value)} />
                </label>
            </div>
            <div className="input-holder">
                <label htmlFor="message" className="form-label">
                    Message/Questions
                <input type="text"
                    className="input"
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)} />
                </label>
            </div>
            <button onClick={(e) => handleSubmit(e)} className="contact-button">
                Send
                <i className="fas fa-paper-plane"></i>
            </button>
        </form>
    )
}
