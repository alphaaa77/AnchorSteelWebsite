import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../components/CSS files/Products.css';
import '../App.css';
import placeholder from '../assets/placeholder.png';
import rebar from '../components/productsheader.jpg';
import mesh from '../assets/mesh.jpg';

function Products() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <div className="section">
      <header className="page-header products-animated-header">
        <div className="page-header-overlay">
          <h1>Products Page</h1>
          <p>Reinforcing Steel You Can Trust – Built for Life</p>
        </div>
      </header>

      <div className="grid">
        {/* Rebar */}
        <div
          className={`vertical-card ${expandedIndex === 0 ? 'expanded' : ''}`}
          onClick={() => toggle(0)}
        >
          <img src={rebar} alt="Rebar" />
          <div className="card-text">
            <h2>Rebar</h2>
            <p>(Round, Deformed, Galvanized, Processed.)</p>
            {expandedIndex === 0 && (
              <>
                <p className="card-details">
                  High-strength steel bars available in multiple grades, cut and bent to specification.
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
          <img src={mesh} alt="Mesh" />
          <div className="card-text">
            <h2>Mesh</h2>
            <p>(Square Mesh, Rectangular Mesh, Trench Mesh)</p>
            {expandedIndex === 1 && (
              <>
                <p className="card-details">
                  Standard and custom-engineered mesh for slabs, walls, and foundations.
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
            <p>Various accessories</p>
            {expandedIndex === 2 && (
              <>
                <p className="card-details">
                  Tie wire, spacers, dowels, safety caps, void formers, and decking solutions.
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
