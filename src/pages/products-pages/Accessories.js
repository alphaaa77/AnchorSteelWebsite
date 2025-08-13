import React, { useState } from 'react';
import '../../components/CSS files/Products.css';
import '../../App.css';
import placeholder from '../../assets/placeholder.jpg';

function Accessories() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  const items = [
    {
      title: 'Bar Chairs',
      sub: 'Plastic & Concrete',
      price: '$XX per pack',
      quantity: '200 pcs / pack',
      desc: 'Maintain cover and position for bars and mesh.'
    },
    {
      title: 'Tie Wire',
      sub: 'Galvanised / Black',
      price: '$XX per roll',
      quantity: '1.57mm • 1.25mm',
      desc: 'Secure bars and mesh intersections quickly and reliably.'
    },
    {
      title: 'Spacers',
      sub: 'Varied sizes',
      price: 'From $X each',
      quantity: '20–75mm cover',
      desc: 'Ensure correct spacing from formwork and surfaces.'
    },
    {
      title: 'Caps & Safety',
      sub: 'Mushroom caps',
      price: '$XX per bag',
      quantity: '100 pcs / bag',
      desc: 'Safety caps for exposed bar ends on site.'
    },
  ];

  return (
    <div className="section">
      <header className="products-animated-header">
        <div className="products-header-overlay">
          <h1>Accessories</h1>
          <p>Tap a card to see details</p>
        </div>
      </header>

      <div className="grid">
        {items.map((it, i) => (
          <div
            key={i}
            className={`vertical-card ${expandedIndex === i ? 'expanded' : ''}`}
            onClick={() => toggle(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle(i)}
            aria-expanded={expandedIndex === i}
          >
            <img src={placeholder} alt={it.title} />
            <div className="card-text">
              <h2>{it.title}</h2>
              {it.sub && <p className="muted">{it.sub}</p>}

              {expandedIndex === i && (
                <div className="card-details">
                  <dl className="kv">
                    <div>
                      <dt>Price</dt>
                      <dd>{it.price || '—'}</dd>
                    </div>
                    <div>
                      <dt>Quantity</dt>
                      <dd>{it.quantity || '—'}</dd>
                    </div>
                    <div>
                      <dt>Description</dt>
                      <dd>{it.desc || '—'}</dd>
                    </div>
                  </dl>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accessories;
