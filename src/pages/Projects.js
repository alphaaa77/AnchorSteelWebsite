
import React, {useState} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import anchorsteellogo from '../assets/anchorsteellogo.png'

function Projects() {
    const [activeCard, setActiveCard] = useState(null);
    const handleCardClick = (index) => {
        setActiveCard(index === activeCard ? null : index);
    };
    // Just add projects as you go. Make sure to ask for the photos of them.
    const projectData = [
    {
        title: "Coming Soon!",
        desc: "Contact us for more information :)",
        img: anchorsteellogo,
        details: "Placeholder text.",
        link:"/projects/testproject"
    },
    {
        title: "Coming Soon!",
        desc: "Contact us for more information :)",
        img: anchorsteellogo,
        details: "Placeholder text.",
        link:"/projects/testprojecttwo"
    },
    {
        title: "Coming Soon!",
        desc: "Contact us for more information :)",
        img: anchorsteellogo,
        details: "Placeholder text."
    }
    ];

    return(
        <div className="section">
            <header className="main-header">
                <h1>Anchor Steel Projects</h1>
                <p>Under development. We appreciate your patience :)</p>
            </header>
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
                        <Link to={project.link} className="view-more-link">View More</Link>
                        </div>
                    )}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
export default Projects;