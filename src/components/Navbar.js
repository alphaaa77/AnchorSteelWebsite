import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SS Logo.png';
import './Navbar.css';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">            
            <img src ={logo}
            alt="Anchor Steel Logo"
            className="navbar-logo"/>
            </Link>

            <div className="navbar-links">
               <Link to="/about" className="nav-button">About Us</Link>
               <Link to="/contact" className="nav-button">Contact</Link>
               <Link to="/projects" className="nav-button">Projects</Link>
               <Link to="/products" className="nav-button">Products & Services</Link>
            </div>
            <div className="navbar-social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" className="social-icon"/>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt ="LinkedIn" className="social-icon"></img>
                </a>
                <a href = "https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt = "Instagram" className="social-icon"></img>
                </a>
            </div>
        </nav>
    );
}
export default Navbar;