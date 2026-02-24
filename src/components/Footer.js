import React from 'react';
import './CSS files/Footer.css';
import anchorLogo from '../assets/anchorsteellogo.png';
import acrslogo from '../assets/acrslogo.png';
function Footer() {
  return (
    <footer className="simple-footer">
      <div className="footer-container">
        {/* Logo on top */}
        <div className="footer-logo">
          <img className="rotate-logo" src={anchorLogo} alt="Anchor Steel Logo" />
            <a 
              href="https://steelcertification.com/acrshome2021" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <img className="acrs-logo" src={acrslogo} alt="ACRS Certified Logo" />
          </a>
        </div>


        {/* New grid: left = contact, right = two link columns */}
        <div className="footer-grid">
          <div className="footer-contact">
            <h4>Anchor Steel Pty Ltd</h4>
            <p>46 Williamson Road, Ingleburn<br/>Sydney NSW 2565</p>
            <p>
              <a href="tel:+610280691930">02 8069 1930</a><br/>
              <a href="mailto:info@anchorsteel.com.au">info@anchorsteel.com.au</a>
            </p>
          </div>

          <div className="footer-links two-col">
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/products">Products</a></li>
                <li>
                <a
                    href="/getaquote"
                    style={{
                    backgroundColor: "#0084ffff",
                    color: "#000",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    display: "inline-block"
                    }}
                >
                    Get A Quote
                </a>
                </li>
            </ul>

            <ul>
              <li>
                <a href="/files/Anchor-Steel-Account-Opening-Form.pdf" target="_blank" rel="noopener noreferrer">
                  Account Opening Form
                </a>
              </li>
              <li>
                <a href="/files/Anchor-Steel-Credit-Application.pdf" target="_blank" rel="noopener noreferrer">
                  Credit Application Form
                </a>
              </li>
              <li>
                <a href="/files/Anchor-Steel-Terms-&-Conditions.pdf" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </a>
              </li>
              <li><a href="/files/Anchor-Steel-Capability-Statement-V1.pdf" target="_blank" rel="noopener noreferrer">
                  Capability Statement
                  </a>
              </li>
            </ul>
            
          </div>
        </div>

        <div className="footer-bottom">
          <p>©{new Date().getFullYear()} Anchor Steel Pty Ltd. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
