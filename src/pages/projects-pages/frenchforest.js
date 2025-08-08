import React, {useState} from 'react';
import '../../App.css';

// USE THIS PAGE AS A TEMPLATE FOR ALL FUTURE PROJECTS FROM NOW ON, JUST COPY PASTE THIS

// Sample images
import image0 from '../../assets/frenchforest/image0.jpg';
import image1 from '../../assets/frenchforest/image1.jpg';
import image2 from '../../assets/frenchforest/image2.jpg';
import image3 from '../../assets/frenchforest/image3.jpg';
function FrenchForest() {
    const images = [image0, image1, image2, image3]; // insert as much images as you need, make sure its all imported 
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
                <h1>7 Rodborough Road</h1>
                <h3>Project Name:</h3>
                <p>7 Rodborough Road, Frenchs Forest, NSW 2086</p>
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
export default FrenchForest;