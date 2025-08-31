import React, {useState} from 'react';
import '../../../components/CSS files/Products.css';
import '../../../App.css';
import placeholder from '../../../assets/placeholder.png';

function ProcRebar() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  const items = [
    {
      title: 'L Bars',
      sub: 'Varied sizes',
      price: '$XX per tonne / $XX per piece',
      quantity: 'Custom lengths, cut & bent to spec',
      desc: '90° bent bars, commonly used for footings, wall junctions and starter bars.'
    },
    {
      title: 'U Bars',
      sub: 'Varied sizes',
      price: '$XX per tonne / $XX per piece',
      quantity: 'Custom lengths, cut & bent to spec',
      desc: 'U-shaped bent bars, typically used for edge reinforcement, beams and cages.'
    },
  ];

  return (
    <div className="section">
      <header className="page-header products-animated-header">
        <div className="page-header-overlay">
          <h1>Processed Rebars</h1>
          <p>Tap a card to see details</p>
        </div>
      </header>
            <nav className="breadcrumb">
                <a href="/">Home</a><span>&gt;</span>
                <a href="/products">Products</a><span>&gt;</span>
                <a href="/rebar">Rebar</a><span>&gt;</span>
                <span className="current">Processed Rebar</span>
            </nav>

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
export default ProcRebar;