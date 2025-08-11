import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import '../components/CSS files/Main.css';
import mainpic from '../assets/mainpic.jpg';
import cutandbent from '../assets/cutandbent.JPG';
import frenchforest from '../assets/frenchforest/image1.jpg';
import bunningstempe from '../assets/bunningstempe/image1.jpg';
import placeholder from '../assets/placeholder.jpg';
import mesh from '../assets/mesh.jpeg';
import sslogo from '../assets/SS Logo.png';

function Main() {
    useEffect(() => {
  const elements = document.querySelectorAll('.scroll-fade-in');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach(el => observer.observe(el));
}, []);

    return (
        <div className = "section-main">
            <header className="animated-header">
            <div className="header-overlay">
                <h1>Built For Life.</h1>
            </div>
            </header>

            <div className="logo-banner">
                <div className="logo-track">
                    <img src={sslogo} alt="Partner 1" />
                    <img src={sslogo} alt="Partner 2" />
                    <img src={sslogo} alt="Partner 3" />
                    <img src={sslogo} alt="Partner 4" />

                    <img src={sslogo} alt="Partner 1 duplicate" />
                    <img src={sslogo} alt="Partner 2 duplicate" />
                    <img src={sslogo} alt="Partner 3 duplicate" />
                    <img src={sslogo} alt="Partner 4 duplicate" />
                </div>
            </div>

            <div className="main-about">
                <div className="about-content">
                    <div className="about-image scroll-fade-in" id="about-img">
                        <img src={mainpic} alt="Reinforcing steel work" style={{cursor: 'default'}}/>
                    </div>
                    <div className="about-text scroll-fade-in" id="about-text">
                        <h1>Reinforcing Strength.</h1>
                        <h2>Built for life.</h2>
                        <p>
                            With decades of industry experience, Anchor Steel supplies high-quality reinforcing solutions to major projects across Australia. Our commitment to strength, reliability, and delivery excellence defines who we are.
                        </p>
                    </div>
                </div>
            </div>

            <div className="main-prodserv">
                <h1>Our Products & Services</h1>
                <div className="services-grid">
                    <div className="service-card">
                        <img src={cutandbent} alt="Cut & Bent Steel" />
                        <h3>Cut & Bent Steel</h3>
                        <p>Precision-cut and bent reinforcement bars tailored for your job site.</p>
                    </div>
                    <div className="service-card">
                        <img src={mesh} alt="Mesh Reinforcement" />
                        <h3>Mesh Reinforcement</h3>
                        <p>Standard and custom mesh solutions for foundations and slabs.</p>
                    </div>
                    <div className="service-card">
                        <img src={placeholder} alt="On-Site Scheduling" />
                        <h3>On-Site Scheduling</h3>
                        <p>Reliable delivery scheduling to ensure smooth project timelines.</p>
                    </div>
                    <div className="service-card">
                        <img src={placeholder} alt="Delivery Logistics" />
                        <h3>Delivery Logistics</h3>
                        <p>Coordinated transport of materials direct to your site, hassle-free.</p>
                    </div>
                </div>
            </div>

            <div className="main-projects">
                <h1>Our Work in Action</h1>
                <div className="project-gallery">
                    <img src={frenchforest} alt="7 Rodborough Road" />
                    <img src={bunningstempe} alt="Bunnings Tempe" />
                </div>
            </div>

            <div className="main-contact">
                <h1>Get In Touch</h1>
                <p>Have questions or want a quote? We're just a message away.</p>
                <Link to="/contact">
                    <button className="contact-btn">Contact Us</button>
                </Link>
            </div>
        </div>
    );
}
export default Main;