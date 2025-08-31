import React, { useState, useEffect } from 'react';
import '../App.css';
import '../components/CSS files/Projects.css';
import { Link } from 'react-router-dom';
import frenchforest from '../assets/frenchforest/image01.jpg';
import bunningstempe from '../assets/bunningstempe/image01.jpg';
import arrowback from '../assets/arrow-back.png';
import arrownext from '../assets/arrow-next.png';
function Projects() {
  const [activeCard, setActiveCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [slideDirection, setSlideDirection] = useState('right');

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const projectData = [
    {
      title: '7 Rodborough Road, Frenchs Forests',
      desc: 'Warehouse, Factory & Industrial Buildings',
      img: frenchforest,
      details: 'More info coming soon...',
      link: '/projects/frenchforest',
    },
    {
      title: 'Bunnings Tempe',
      desc: 'More info coming soon!',
      img: bunningstempe,
      details: 'More info coming soon...',
      link: '/projects/bunningstempe',
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
        <div className="projects-header">
            <div className="slideshow-img-wrapper">
                {prevSlide !== null && (
                <img
                    key={`prev-${prevSlide}`}
                    src={projectData[prevSlide].img}
                    alt={projectData[prevSlide].title}
                    className={`slideshow-bg fade-out slide-${slideDirection}`}
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
            <div className="slideshow-overlay">
                <h1 className="slideshow-title">Anchor Steel Projects</h1>
                <div className="project-info-card">
                <h3>{projectData[currentSlide].title}</h3>
                <p>{projectData[currentSlide].desc}</p>
                </div>
                <button className="slideshow-button left" onClick={handlePrev}>
                <img src={arrowback} alt="Back"/>
                </button>
                <button className="slideshow-button right" onClick={handleNext}>
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
                  {project.link && (
                    <Link to={project.link} className="view-more-link">
                      View More
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
