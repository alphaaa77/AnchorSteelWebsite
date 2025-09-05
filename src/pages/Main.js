import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import '../components/CSS files/Main.css';
import mainpic from '../assets/anchorsteelshow.jpg';
import cutandbent from '../assets/cutandbent.JPG';
import mondaalogo from '../assets/partneredcomps/MondaaGroup.png';
import frenchforest from '../assets/frenchforest/image1.jpg';
import bunningstempe from '../assets/bunningstempe/image1.jpg';
import deliverypic from '../assets/Delivery.jpg';
import estimatingpic from '../assets/Estimating.jpg';
import mesh from '../assets/mesh.jpg';
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
            <header className="page-header animated-header">
            <div className="page-header-overlay">
                <h1>Built For Life.</h1>
            </div>
            </header>

            <div className="logo-banner">
                <h2 className="logo-banner-heading">
                    Proud partners with these companies!
                </h2>
                <div className="logo-track">
                    {/* Original Partnered Companies */}
                    <img src={sslogo} alt="Partner 1" />
                    <a href ="https://mondaa.com.au/" target="_blank" rel="noopener noreferrer">
                        <img src={mondaalogo} alt="Partner 2" />
                    </a>
                    <img src={sslogo} alt="Partner 3" />
                    <a href ="https://mondaa.com.au/" target="_blank" rel="noopener noreferrer">
                        <img src={mondaalogo} alt="Partner 4" />
                    </a>
                    {/*********************/}

                    {/* Duplicate Group 1 */}
                    <img src={sslogo} alt="Partner 1 duplicate" />
                    <a href ="https://mondaa.com.au/" target="_blank" rel="noopener noreferrer">
                        <img src={mondaalogo} alt="Partner 2" />
                    </a>
                    <img src={sslogo} alt="Partner 3 duplicate" />
                    <a href ="https://mondaa.com.au/" target="_blank" rel="noopener noreferrer">
                        <img src={mondaalogo} alt="Partner 4" />
                    </a>
                    {/*********************/}

                    {/* Duplicate Group 2 */}
                    <img src={sslogo} alt="Partner 1 duplicate" />
                    <a href ="https://mondaa.com.au/" target="_blank" rel="noopener noreferrer">
                        <img src={mondaalogo} alt="Partner 2" />
                    </a>
                    <img src={sslogo} alt="Partner 3 duplicate" />
                    <a href ="https://mondaa.com.au/" target="_blank" rel="noopener noreferrer">
                        <img src={mondaalogo} alt="Partner 4" />
                    </a>
                    {/*********************/}

                    {/* Duplicate Group 3 */}
                    <img src={sslogo} alt="Partner 1 duplicate" />
                    <a href ="https://mondaa.com.au/" target="_blank" rel="noopener noreferrer">
                        <img src={mondaalogo} alt="Partner 2" />
                    </a>
                    <img src={sslogo} alt="Partner 3 duplicate" />
                    <a href ="https://mondaa.com.au/" target="_blank" rel="noopener noreferrer">
                        <img src={mondaalogo} alt="Partner 4" />
                    </a>
                    {/*********************/}
                </div>
            </div>
            
            <div className="main-about">
                <div className="about-content">
                    <div className="about-image scroll-fade-in" id="about-img">
                        <img src={mainpic} alt="Reinforcing steel work" style={{cursor: 'default'}}/>
                    </div>
                    <div className="about-text scroll-fade-in" id="about-text">
                        <h1>Anchor Steel P/L</h1>
                        <h2>Built for life.</h2>
                        <p>
                            At Anchor Steel, we deliver more than just reinforcing steel — we deliver trust,
precision, and reliability for every project across Sydney and New South
Wales.
                        </p>
                        <p>
                            Proudly Australian-owned and operated, we combine world-class processing,
fabrication, and delivery services with a commitment to safety, sustainability,
and customer care.
                        </p>
                        <h2>Our promise is simple.</h2>
                        <p>
                            - Certified quality that meets every Australian Standard.
                        </p>
                        <p>
                            - Service that treats every client like family.
                        </p>
                        <p>
                            - Innovation that saves time, reduces waste, and delivers results.
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
                        <img src={estimatingpic} alt="Estimating & Scheduling" />
                        <h3>Estimating & Scheduling</h3>
                        <p>Accurate project estimates and reliable schedules to keep your build on track.</p>
                    </div>
                    <div className="service-card">
                        <img src={deliverypic} alt="Delivery Logistics" />
                        <h3>Delivery Logistics</h3>
                        <p>Efficient delivery solutions to ensure your steel arrives when and where you need it.</p>
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
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <button className="contact-btn">Contact Us</button>
                </Link>
            </div>
        </div>
    );
}
export default Main;