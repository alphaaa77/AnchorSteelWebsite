import React, {useState} from 'react';
import '../../components/CSS files/IndProjects.css'

import image1 from '../../assets/bunningstempe/image1.jpg';
import image2 from '../../assets/bunningstempe/image2.JPG';
import image3 from '../../assets/bunningstempe/image3.JPG';

import arrowback from '../../assets/arrow-back.png';
import arrownext from '../../assets/arrow-next.png';

function BunningsTempe() {
    const images = [image1, image2, image3]; // insert as much images as needed, make sure its all imported 
    const [currentIndex, setCurrentIndex] = useState(0)

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    return (
    <div className="section">
        <div className="page-container">
                <div className="carousel">
                    <img
                    src={images[currentIndex]}
                    alt={`Project pic ${currentIndex + 1}`}
                    className="carousel-img"
                    />
                    <button className="carousel-btn left"  onClick={goPrev}>
                        <img src={arrowback} alt="Back"/>
                    </button>
                    <button className="carousel-btn right" onClick={goNext}>
                        <img src={arrownext} alt="Next"/>
                    </button>
                </div>

                <div className="project-card">
                    <h1 className="project-title">Bunnings Tempe</h1>
                    <p className="project-lead">728-750 Princes Highway, Tempe</p>
                    <div className="meta-grid">
                        <div className="meta">
                            <span className="label">Project Name</span>
                            <span className="value">Bunnings</span>
                        </div>
                        <div className="meta">
                            <span className="label">Client Name</span>
                            <span className="value">Test Client</span>
                        </div>
                        <div className="meta">
                            <span className="label">Tonnage</span>
                            <span className="value">999,999</span>
                        </div>
                        <div className="meta">
                            <span className="label">Status</span>
                            <span className="value">Completed</span>
                        </div>
                    </div>

                <div className="hr"></div>

                <p className="description">
                    Sunt at non et pariatur eu deserunt sint ex voluptate laborum culpa do irure…
                </p>
            </div>

        </div>
    </div>
    );
}
export default BunningsTempe;