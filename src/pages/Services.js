import React, { useState, useEffect } from 'react';
import '../components/CSS files/Services.css';
import '../App.css';
import placeholder from '../assets/placeholder.jpg';
import arrowback from '../assets/arrow-back.png';
import arrownext from '../assets/arrow-next.png';

function Services() {
  const [activeCard, setActiveCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [slideDirection, setSlideDirection] = useState('right');

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const projectData = [
    {
      title: 'Bar Processing',
      desc: 'Warehouse, Factory & Industrial Buildings',
      img: placeholder,
      details: 'Irure dolor aliquip voluptate ullamco adipisicing occaecat minim occaecat culpa laboris aliqua dolore velit id. Reprehenderit laboris quis anim exercitation culpa pariatur ea. Aliqua est ex quis ad.',
    },
    {
      title: 'Estimating',
      desc: 'More info coming soon!!!!',
      img: placeholder,
      details: 'Placeholder text.',
    },
    {
      title: 'Scheduling',
      desc: 'More info coming soon',
      img: placeholder,
      details: 'Placeholdertext',
    },
    {
      title: 'Galvanizing',
      desc: 'More info coming soon',
      img: placeholder,
      details: 'Placeholder text',
    },
    {
      title: 'Delivery',
      desc: 'More info coming soon',
      img: placeholder,
      details: 'Placeholder text',
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
    setSlideDirection('right');
    setPrevSlide(currentSlide)
      setCurrentSlide((prev) => (prev + 1) % projectData.length);
    }, 3500); // change seconds depending
    return () => clearInterval(interval);
  }, [currentSlide, projectData.length]);

  const handlePrev = () => {
    setSlideDirection('left');
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  const handleNext = () => {
    setSlideDirection('right');
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % projectData.length);
  };

  return (
    <div className="section-projects">
        <div className="services-header">
            <div className="services-slideshow-img-wrapper">
                {prevSlide !== null && (
                <img
                    key={`prev-${prevSlide}`}
                    src={projectData[prevSlide].img}
                    alt={projectData[prevSlide].title}
                    className={`services-slideshow-bg fade-out slide-${slideDirection}`}
                />
                )}
                <img
                key={`current-${currentSlide}`}
                src={projectData[currentSlide].img}
                alt={projectData[currentSlide].title}
                className={`slideshow-bg fade-in slide-${slideDirection}`}
                onAnimationEnd={() => setPrevSlide(null)}
                />
            </div>
            <div className="services-slideshow-overlay">
                <h1 className="services-slideshow-title">Our Services</h1>
                <div className="services-info-card">
                <h3>{projectData[currentSlide].title}</h3>
                <p>{projectData[currentSlide].desc}</p>
                </div>
                <button className="services-slideshow-button left" onClick={handlePrev}>
                <img src={arrowback} alt="Back"/>
                </button>
                <button className="services-slideshow-button right" onClick={handleNext}>
                <img src={arrownext} alt="Next"/>
                </button>
            </div>
        </div>
      <div className="grid">
        {projectData.map((project, i) => (
          <div
            key={i}
            className={`card vertical-card ${activeCard === i ? 'expanded' : ''}`}
            onClick={() => handleCardClick(i)}
          >
            <img src={project.img} alt={project.title} />
            <div className="card-text">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              {activeCard === i && (
                <div className="card-details">
                  <p>{project.details}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
