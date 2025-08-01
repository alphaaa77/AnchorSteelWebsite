import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SS Logo.png';
function Navbar() {
    return (
        <nav style = {{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 30px',
                backgroundColor: 'white',
                color: 'white'
            }}>
            <Link to="/">            
            <img src ={logo}
            alt="Anchor Steel Logo"
            style={{height: '60px', objectFit:'contain'}}/>
            </Link>

            <div style = {{display: 'flex', gap: '20px'}}>
               <Link to="/about" style={navButtonStyle}>About Us</Link>
               <Link to="/contact" style ={navButtonStyle}>Contact</Link>
               <Link to="/projects" style={navButtonStyle}>Projects</Link>
               <Link to="/products" style={navButtonStyle}>Products</Link>
            </div>
        </nav>
    );
}
const navButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'black',
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none', // Removes underline from Link
    padding: '6px 12px'
}
export default Navbar;