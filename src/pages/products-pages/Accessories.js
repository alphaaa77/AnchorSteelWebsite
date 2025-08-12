import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../components/CSS files/Products.css';
import '../../App.css';
import placeholder from '../../assets/placeholder.jpg';

function Accessories() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  const items = [
    { title: 'Bar Chairs', sub: 'Plastic & Steel', desc: 'Maintain cover and position for bars and mesh.' },
    { title: 'Tie Wire', sub: 'Galvanised / Black', desc: 'Secure bars and mesh intersections quickly and reliably.' },
    { title: 'Spacers', sub: 'Varied sizes', desc: 'Ensure correct spacing from formwork and surfaces.' },
    { title: 'Caps & Safety', sub: 'Mushroom caps', desc: 'Safety caps for exposed bar ends on site.' },
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

export default Accessories;
