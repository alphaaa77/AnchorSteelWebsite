import React from 'react';
import '../App.css';

function Contact() {
    return(
        <div className="section">
            <header className="main-header">
                <h1>Contact Us!</h1>
                <p>This website is currently under development. 
                    While the details are still being finalized, all essential contact information is available below. 
                    If you have any questions or need assistance, feel free to reach out — we’d be happy to help.</p>
            </header>
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