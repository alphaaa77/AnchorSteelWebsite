import React, {useState} from 'react';
import '../../App.css';


// Sample images
import image1 from '../../assets/bunningstempe/image1.JPG';
import image2 from '../../assets/bunningstempe/image2.JPG';
import image3 from '../../assets/bunningstempe/image3.JPG';

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
            <header>
                <h1>Bunnings Tempe</h1>
                <h3>Project Name:</h3>
                <p>Bunnings</p>
                <h3>Client Name:</h3>
                <p>Test Client</p>
                <h3>Tonnage:</h3>
                <p>9999999</p>
                <h3>Project Overview:</h3>
                <p>Sunt ad non et pariatur eu deserunt sint ex voluptate laborum culpa do irure. Lorem veniam adipisicing labore qui esse et dolore ad ex ex cillum pariatur. Mollit duis sit enim ipsum laboris mollit veniam mollit. Labore consequat pariatur exercitation quis minim proident exercitation sunt ut tempor laborum qui ex. 
                    Laboris incididunt pariatur ea est esse excepteur amet elit pariatur in eu ex est sint. 
                    Labore tempor dolore mollit sit irure officia. In sit occaecat nulla incididunt quis nulla nisi id dolore.</p>
            </header>
        </div>
    );
}
export default BunningsTempe;