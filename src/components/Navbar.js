import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SS Logo.png';
import './CSS files/Navbar.css';
/*import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';*/

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Logo */}
            <Link to="/">            
                <img src={logo} alt="Anchor Steel Logo" className="navbar-logo" />
            </Link>

            {/* Hamburger button (mobile only) */}
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            {/* Links + Quote + Socials */}
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <div className="navbar-links">
                    <Link to="/about" className="nav-button">About Us</Link>
                    <Link to="/contact" className="nav-button">Contact</Link>
                    {<Link to="/projects" className="nav-button">Projects</Link>}
                    <Link to="/products" className="nav-button">Products</Link>
                    <Link to="/services" className="nav-button">Services</Link>
                </div>

                <Link to="/getaquote">          
                    <button className="quote-button">Get A Quote</button>
                </Link>

                {/*<div className="navbar-social">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className="social-icon" />
                    </a>
                </div>*/}
            </div>
        </nav>
    );
}
export default Navbar;
