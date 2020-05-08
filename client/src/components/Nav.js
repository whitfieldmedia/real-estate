import React, { useState } from 'react';
import logo from '../assets/images/coltmor-realty.png';
import { Link } from 'react-router-dom';
import '../assets/css/nav.css';

export default function Nav() {
    const [ open, setOpen ] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <nav className="navbar">
            <div className="nav-logo-holder">
                <Link to="/">
                    <img src={logo} className="nav-logo" alt="Coltmor Realty Co." />
                </Link>
                <a href="tel:6622297003" className="nav-phone-link">
                    (662) 229-7003
                </a>
            </div>

            <div onClick={handleClick} className={open ? "nav-toggle open" : "nav-toggle closed"}>
                <span className="bar" id="bar1"></span>
                <span className="bar" id="bar2"></span>
                <span className="bar" id="bar3"></span>
            </div>
            <ul className={open ? "nav-link-wrapper nav-link-wrapper-open" : "nav-link-wrapper nav-link-wrapper-closed"}>
                <li className="nav-link-holder">
                    <Link className="nav-link" onClick={handleClose} to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-link-holder">
                    <Link className="nav-link" onClick={handleClose} to="/mortgage-calculator">
                        Mortgage Calculator
                    </Link>
                </li>
                <li className="nav-link-holder">
                    <Link className="nav-link" onClick={handleClose} to="/properties">
                        Properties
                    </Link>
                </li>
                <li className="nav-link-holder">
                    <Link className="nav-link" onClick={handleClose} to="/gallery">
                        Gallery
                    </Link>
                </li>
                <li className="nav-link-holder">
                    <Link className="nav-link" onClick={handleClose} to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
