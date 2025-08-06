import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import anchorsteellogo from '../assets/anchorsteellogo.png';
import placeholderimage from '../assets/placeholder.jpg';
import photo1 from '../assets/testproject/photo1.jpg';
import photo2 from '../assets/testproject/photo2.jpg';
import photo3 from '../assets/testproject/photo3.jpg';

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
      title: 'Project A',
      desc: 'Contact us for more information :)',
      img: photo1,
      details: 'Placeholder text.',
      link: '/projects/testproject',
    },
    {
      title: 'Project B',
      desc: 'More info coming soon!',
      img: photo2,
      details: 'Placeholder text.',
      link: '/projects/testprojecttwo',
    },
    {
      title: 'Project C',
      desc: 'Currently in development.',
      img: photo3,
      details: 'Placeholder text.',
    },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
    setSlideDirection('right');
    setPrevSlide(currentSlide)
      setCurrentSlide((prev) => (prev + 1) % projectData.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [projectData.length]);

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
                {'<'}
                </button>
                <button className="slideshow-button right" onClick={handleNext}>
                {'>'}
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
