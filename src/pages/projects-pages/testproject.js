import React, {useState} from 'react';
import '../../App.css';

// Sample images
import photo1 from '../../assets/anchorsteellogo.png'
import photo2 from '../../assets/anchorsteellogo.png'
import photo3 from '../../assets/anchorsteellogo.png'
function TestProject() {
    const images = [photo1, photo2, photo3];
    const [currentIndex, setCurrentIndex] = useState(0)

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    return (
        <div className="section">
            <header>
                <h1>Test project one :)</h1>
                <h3>Project Name:</h3>
                <p>Test Project</p>
                <h3>Client Name:</h3>
                <p>Test Client</p>
                <h3>Project Overview:</h3>
                <p>Sunt ad non et pariatur eu deserunt sint ex voluptate laborum culpa do irure. Lorem veniam adipisicing labore qui esse et dolore ad ex ex cillum pariatur. Mollit duis sit enim ipsum laboris mollit veniam mollit. Labore consequat pariatur exercitation quis minim proident exercitation sunt ut tempor laborum qui ex. 
                    Laboris incididunt pariatur ea est esse excepteur amet elit pariatur in eu ex est sint. 
                    Labore tempor dolore mollit sit irure officia. In sit occaecat nulla incididunt quis nulla nisi id dolore.</p>
            </header>

            <div className="carousel-container">
                <button className="carousel-btn" onClick={goPrev}>
                    &lt;
                </button>
                <img
                src={images[currentIndex]}
                alt={`Project pic ${currentIndex + 1}`}
                className="carousel-img"
                />
                <button className="carousel-btn" onClick={goNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
}
export default TestProject;