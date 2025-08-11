import React from 'react';
import './CSS files/Footer.css';
import anchorLogo from '../assets/anchorsteellogo.png';

function Footer() {
  return (
    <footer className="simple-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img className="rotate-logo" src={anchorLogo} alt="Anchor Steel Logo" />
        </div>

        <div className="footer-links two-col">
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/getaquote">Get A Quote</a></li>
            <li>
              <a href="/files/Anchor-Steel-Terms-&-Conditions.pdf" target="_blank" rel="noopener noreferrer">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/files/Anchor-Steel-Account-Opening-Form.pdf" target="_blank" rel="noopener noreferrer">
                Account Opening Form
              </a>
            </li>
            <li><a href="/pricelist">Price List</a></li>
            <li><a href="/credit">Credit Application</a></li>
            <li><a href="/acrs">ACRS Certification</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>©{new Date().getFullYear()} Anchor Steel Pty Ltd. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
