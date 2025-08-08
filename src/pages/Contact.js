import React from 'react';
import '../App.css';
import '../components/CSS files/Contact.css';
import placeholder from '../assets/placeholder.jpg';
function Contact() {
    return(
        <div className="section">
            <header className="contact-animated-header">
                <div className="contact-header-overlay">
                <h1>Contact Us!</h1>
                    <h3>Address:</h3>
                    <p>46 Williamson Road, Ingleburn, 2565, Sydney, NSW</p>
                </div>
            </header>

            <div className="contact-form-section">
                <div className="contact-form-container">
                    <form className="contact-form">
                        <h2>Contact Form</h2>
                        <label>First Name</label>
                        <input type="text" placeholder="Enter your first name" />

                        <label>Last Name</label>
                        <input type="text" placeholder="Enter your last name" />

                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />

                        <label>Message</label>
                        <textarea placeholder="Type your message here..." rows="5"></textarea>

                        <button type="submit">Submit</button>
                    </form>

                    <div className="contact-info-card">
                        <img src={placeholder} alt="Get in Touch" />
                        <div className="info-content">
                            <h3>Get in Touch With Us</h3>
                            <p>We’ll be happy to help with any inquiries, quotes, or general information.</p>
                            <p>Expect a friendly reply within 1–2 business days.</p>
                            <h3>Address:</h3>
                            <p>46 Williamson Road</p>
                            <p>Ingleburn</p>
                            <p>Sydney, NSW</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="vertical-card">
                    <div className="card-text">
                        <h3>Someone</h3>
                        <h3>Email:</h3>
                        <p>info@anchorsteel.com.au</p>
                        <h3>Phone:</h3>
                        <p>+123123123</p>
                    </div>
                </div>
                <div className="vertical-card">
                    <div className="card-text">
                        <h3>Someone 2</h3>
                        <h3>Email:</h3>
                        <p>someone2@anchorsteel.com.au</p>
                        <h3>Phone:</h3>
                        <p>+123123123</p>
                    </div>
                </div>
                <div className="vertical-card">
                    <div className="card-text">
                        <h3>Someone 3</h3>
                        <h3>Email:</h3>
                        <p>someone3@anchorsteel.com.au</p>
                        <h3>Phone:</h3>
                        <p>+123123123</p>
                    </div>
                </div>
                <div className="vertical-card">
                    <div className="card-text">
                        <h3>Someone 4</h3>
                        <h3>Email:</h3>
                        <p>someone4@anchorsteel.com.au</p>
                        <h3>Phone:</h3>
                        <p>+123123123</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;