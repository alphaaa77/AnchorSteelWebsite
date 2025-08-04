import React from 'react';
import '../App.css';
import rotatinglogo from '../assets/anchorsteellogo.png';
function Main() {
    return (
        <div className = "section">
        <header className = "main-header">
            <h1>Website development on its way!</h1>
            <p>This website is currently under development. Please see the "Contact" section for any inquries.</p>
        </header>
        <img src={rotatinglogo} alt="Rotating Logo" className="rotating-logo"/>
        </div>
    );
}
export default Main;