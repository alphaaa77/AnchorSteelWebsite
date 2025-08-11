import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../components/CSS files/Products.css';
import '../App.css';
import placeholder from '../assets/placeholder.jpg';

function Products() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <div className="section">
      <header className="products-animated-header">
        <div className="products-header-overlay">
          <h1>Products Page</h1>
          <p>Supplying high-quality reinforcement solutions for all construction needs</p>
        </div>
      </header>

      <div className="grid">
        {/* Rebar */}
        <div
          className={`vertical-card ${expandedIndex === 0 ? 'expanded' : ''}`}
          onClick={() => toggle(0)}
        >
          <img src={placeholder} alt="Rebar" />
          <div className="card-text">
            <h2>Rebar</h2>
            <p>(N12, N16 etc.)</p>
            {expandedIndex === 0 && (
              <>
                <p className="card-details">
                  Various sizes of reinforcing steel bars for concrete reinforcement
                </p>
                <Link
                  to="/rebar"
                  className="view-more-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View More
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mesh */}
        <div
          className={`vertical-card ${expandedIndex === 1 ? 'expanded' : ''}`}
          onClick={() => toggle(1)}
        >
          <img src={placeholder} alt="Mesh" />
          <div className="card-text">
            <h2>Mesh</h2>
            <p>(SL62, SL92 etc.)</p>
            {expandedIndex === 1 && (
              <>
                <p className="card-details">
                  Pre-fabricated steel mesh sets for slab and wall reinforcement
                </p>
                <Link
                  to="/mesh"
                  className="view-more-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View More
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Accessories */}
        <div
          className={`vertical-card ${expandedIndex === 2 ? 'expanded' : ''}`}
          onClick={() => toggle(2)}
        >
          <img src={placeholder} alt="Accessories" />
          <div className="card-text">
            <h2>Accessories</h2>
            {expandedIndex === 2 && (
              <>
                <p className="card-details">
                  Ties, bar chairs, spacers, and other reinforcement accessories
                </p>
                <Link
                  to="/accessories"
                  className="view-more-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View More
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
