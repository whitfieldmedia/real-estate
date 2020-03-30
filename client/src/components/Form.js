import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/form.css';

export default function Form() {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ error, setError ] = useState(false)
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
                message: message
            }
        })
        setName('')
        setEmail('')
        setPhone('')
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
                </label>
                <input type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-holder">
                <label htmlFor="email" className="form-label">
                    Email*
                </label>
                <input type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-holder">
                <label htmlFor="phone" className="form-label">
                    Phone*
                </label>
                <input type="text"
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="input-holder">
                <label htmlFor="email" className="form-label">
                    Comments
                </label>
                <input type="text"
                    className="input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button onClick={(e) => handleSubmit(e)} className="contact-button">
                Send
                <i className="fas fa-paper-plane"></i>
            </button>
        </form>
    )
}
