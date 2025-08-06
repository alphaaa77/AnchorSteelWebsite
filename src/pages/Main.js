import React from 'react';
import '../App.css';
import '../components/Main.css';
function Main() {
    return (
        <div className = "section-main">
            <header className="animated-header">
            <div className="header-overlay">
                <h1>Website development on its way!</h1>
                <p>This website is currently under development. Please see the "Contact" section for any inquiries.</p>
            </div>
            </header>
            <div className="main-about">
                <h1>About Us</h1>
                <p>Section for about us.</p>
            </div>
            <div className="main-prodserv">
                <h1>Products/Services Section</h1>
                <p>Section for products and services.</p>
            </div>
            <div className="main-projects">
                <h1>Projects Section</h1>
                <p>Section for projects.</p>
            </div>
            <div className="main-contact">
                <h1>Contact</h1>
                <p>Section for contact.</p>
            </div>
        </div>
    );
}
export default Main;