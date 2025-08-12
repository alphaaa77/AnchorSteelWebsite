import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../components/CSS files/Products.css';
import '../../App.css';
import placeholder from '../../assets/placeholder.jpg';

function Mesh() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  const items = [
    { title: 'Square Mesh', sub: '(6mm @ 200mm)', desc: 'General-purpose mesh for residential slabs and paths.' },
    { title: 'Rectangular Mesh', sub: '(7mm @ 200mm)', desc: 'Heavier-duty mesh suitable for higher load areas.' },
    { title: 'Trench Mesh', sub: '(8mm @ 200mm)', desc: 'Popular commercial option for slabs and pavements.' },
    { title: 'Ezimesh (Square Mesh)', sub: '(9mm @ 200mm)', desc: 'Industrial-grade mesh for high-load applications.' },
  ];

    return (
    <div className="section">
        <header className="products-animated-header">
        <div className="products-header-overlay">
            <h1>Rebar</h1>
            <p>Deformed reinforcing bars for structural concrete</p>
        </div>
        </header>

        <div className="grid">
        {items.map((it, i) => (
            <div
            key={i}
            className={`vertical-card ${expandedIndex === i ? 'expanded' : ''}`}
            onClick={() => toggle(i)}
            >
            <img src={placeholder} alt={it.title} />
            <div className="card-text">
                <h2>{it.title}</h2>
                {it.sub && <p>{it.sub}</p>}
                {expandedIndex === i && (
                <>
                    <p className="card-details">{it.desc}</p>
                    <Link to={it.link} className="view-more-btn">
                    View More
                    </Link>
                </>
                )}
            </div>
            </div>
        ))}
        </div>
    </div>
    );
}

export default Mesh;
