import React, { useState } from 'react';
import '../../components/CSS files/Products.css';
import '../../App.css';
import placeholder from '../../assets/placeholder.jpg';

function Rebar() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  const items = [
    { title: 'N12 Deformed Rebar', sub: '(Standard Grade)', desc: '12mm bar for major structural reinforcement.' },
    { title: 'N16 Deformed Rebar', sub: '(Standard Grade)', desc: '16mm bar for major structural reinforcement.' },
    { title: 'N20 Deformed Rebar', sub: '(Standard Grade)', desc: '20mm bar for major structural reinforcement.' },
    { title: 'N24 Deformed Rebar', sub: '(Standard Grade)', desc: '24mm bar for major structural reinforcement.' },
    { title: 'N28 Deformed Rebar', sub: '(Standard Grade)', desc: '28mm bar for major structural reinforcement.' },
    { title: 'N32 Deformed Rebar', sub: '(Standard Grade)', desc: '32mm bar for major structural reinforcement.' },
    { title: 'N36 Deformed Rebar', sub: '(Standard Grade)', desc: '36mm bar for major structural reinforcement.' },
    { title: 'N40 Deformed Rebar', sub: '(Standard Grade)', desc: '40mm bar for major structural reinforcement.' },
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
              {expandedIndex === i && <p className="card-details">{it.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rebar;
