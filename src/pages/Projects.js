
import React, {useState} from 'react';
import '../App.css';
import placeholderimg from '../assets/placeholder.jpg'

function Projects() {
    const [activeCard, setActiveCard] = useState(null);
    const handleCardClick = (index) => {
        setActiveCard(index === activeCard ? null : index);
    };
    // Just add projects as you go. Make sure to ask for the photos of them.
    const projectData = [
    {
        title: "Westfield shopping center",
        desc: "This obviously isn't Westfield, bru.",
        img: placeholderimg,
        details: "Detailed info about this project, tools used, etc."
    },
    {
        title: "Another cool project",
        desc: "This one's legit.",
        img: placeholderimg,
        details: "Expanded content for the second project."
    },
    {
        title: "Project 3",
        desc: "Small description here.",
        img: placeholderimg,
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