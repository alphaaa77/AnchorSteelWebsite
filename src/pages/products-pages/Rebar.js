import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../components/CSS files/Products.css';
import '../../App.css';
import placeholder from '../../assets/placeholder.jpg';

function Rebar() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

    const items = [
    { title: 'Rounded Rebar', sub: '(Standard Grade)', desc: 'Rounded rebar for major structural reinforcement.', link: '/products/rounded-rebar' },
    { title: 'Deformed Rebar', sub: '(Standard Grade)', desc: 'Deformed rebar for major structural reinforcement.', link: '/products/deformed-rebar' },
    { title: 'Galvanized Rebar', sub: '(Standard Grade)', desc: 'Galvanized rebar for major structural reinforcement.', link: '/products/galvanized-rebar' },
    { title: 'Processed Rebar', sub: '(Standard Grade)', desc: 'Processed rebar for major structural reinforcement.', link: '/products/processed-rebar' },
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

export default Rebar;
