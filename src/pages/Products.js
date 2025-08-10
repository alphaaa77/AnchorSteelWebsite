import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../components/CSS files/Products.css';
import '../App.css';
import placeholder from '../assets/placeholder.jpg';

function Products() {
  return (
    <div className="section">
      <header className="products-animated-header">
        <div className="products-header-overlay">
          <h1>Products Page</h1>
          <p>Supplying high-quality reinforcement solutions for all construction needs</p>
        </div>
      </header>

      <div className="products-grid">
        <div className="product-card">
          <img src={placeholder} alt="Rebar" />
          <h2>Rebar</h2>
          <p>(N12, N16 etc.)</p>
          <p>Various sizes of reinforcing steel bars for concrete reinforcement</p>
        </div>

        <div className="product-card">
          <img src={placeholder} alt="Mesh" />
          <h2>Mesh</h2>
          <p>(SL62, SL92 etc.)</p>
          <p>Pre-fabricated steel mesh sets for slab and wall reinforcement</p>
        </div>

        <div className="product-card">
          <img src={placeholder} alt="Accessories" />
          <h2>Accessories</h2>
          <p>Ties, bar chairs, spacers, and other reinforcement accessories</p>
        </div>

        <div className="product-card">
          <img src={placeholder} alt="Cut & Bent" />
          <h2>Cut & Bent</h2>
          <p>Custom cut and bent reinforcing steel to meet specific project requirements</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
