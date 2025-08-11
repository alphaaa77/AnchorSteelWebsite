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
                        <h3>Rachel Hu</h3>
                        <h3>Email:</h3>
                        <p>rachelh@anchorsteel.com.au</p>
                        <h3>Phone:</h3>
                        <p>04011840777</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;