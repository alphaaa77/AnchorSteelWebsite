import React, { useEffect, useState } from 'react';
import '../../../components/CSS files/Products.css';
import '../../../App.css';

function GalvRebar() {
  const [openRow, setOpenRow] = useState(null);

  // 1) Hold DB data (prices/availability/notes) keyed by product_code
  const [dbData, setDbData] = useState({});     // { "R6.5": { sixm_price, ... } }
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // 2) Fetch once on mount
  useEffect(() => {
    // If you add "proxy": "http://localhost:5000" to your frontend package.json,
    // you can just fetch('/api/prices') here. Otherwise use full URL:
    fetch('http://localhost:5000/api/prices/rebar')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(rows => {
        const lookup = {};
        rows.forEach(r => { lookup[r.product_code] = r; });
        setDbData(lookup);
      })
      .catch(err => setLoadError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Change or add values here as needed, these are the hard-coded values
  const rows = [
    { code: "N12G", diameter: "6.5", area: "33", variants: [
      { length: "6m",  price: "$2.10 / m", availability: "In stock"},
      { length: "9m",  price: "$3.15 / m", availability: "Preorder 3–5 days"},
      { length: "12m", price: "$4.20 / m", availability: "In stock"}
    ]},
    { code: "N16G", diameter: "10", area: "79", variants: [
      { length: "6m",  price: "$3.80 / m", availability: "Low stock, preorder 3–5d"},
      { length: "9m",  price: "$3.15 / m", availability: "Preorder 3–5 days"},
      { length: "12m", price: "$4.20 / m", availability: "In stock"},
    ]},
    { code: "N20G", diameter: "12", area: "113", variants: [
      { length: "6m",  price: "$3.80 / m", availability: "Low stock, preorder 3–5d"},
      { length: "9m",  price: "$3.15 / m", availability: "Preorder 3–5 days"},
      { length: "12m", price: "$4.20 / m", availability: "In stock"},
    ]},
    { code: "N24G", diameter: "16", area: "201", variants: [
      { length: "6m",  price: "$3.80 / m", availability: "Low stock, preorder 3–5d"},
      { length: "9m",  price: "$3.15 / m", availability: "Preorder 3–5 days"},
      { length: "12m", price: "$4.20 / m", availability: "In stock"},
    ]},
  ];

  // 4) Helper to map "6m" | "9m" | "12m" -> column names
  const pick = (code, length) => {
    const row = dbData[code];
    if (!row) return null;

    const map = {
      '6m':  { price: 'sixm_price',   avail: 'sixm_avail'   },
      '9m':  { price: 'ninem_price',  avail: 'ninem_avail'  },
      '12m': { price: 'twelvem_price',avail: 'twelvem_avail'},
    };
    const cols = map[length];
    if (!cols) return null;

    return {
      price: row[cols.price],
      availability: row[cols.avail],
      notes: row.notes, // shared notes column in your table
    };
  };

  const toggleRow = (i) => setOpenRow(openRow === i ? null : i);

  const safe = (v, fallback = '—') => (v ?? '').toString().trim() || fallback;

  return (
    <div className="section">
      <header className="products-animated-header">
        <div className="products-header-overlay"><h1>Rounded Rebar</h1></div>
      </header>

      <nav className="breadcrumb">
        <a href="/">Home</a><span>&gt;</span>
        <a href="/products">Products</a><span>&gt;</span>
        <a href="/rebar">Rebar</a><span>&gt;</span>
        <span className="current">Round Bar - Grade R250N</span>
      </nav>

      <h3 className="product-intro">
        Ipsum consectetur nostrud nostrud laboris minim mollit commodo tempor in. 
        Commodo anim incididunt consectetur eu Lorem dolor in deserunt. 
        </h3>

      {!!loadError && <div className="error-banner">Failed to load live data: {loadError}</div>}

      <div className="prod-table-wrap">
        <table className="prod-table">
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Diameter (mm)</th>
              <th>Cross Sectional Area (mm²)</th>
              <th aria-hidden="true"></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => {
              const isOpen = openRow === i;
              return (
                <React.Fragment key={r.code}>
                  {/* main row */}
                  <tr
                    className={`prod-row ${isOpen ? "open" : ""}`}
                    onClick={(e) => {
                      if (!e.target.closest('.row-toggle')) toggleRow(i);
                    }}
                  >
                    <td><strong>{r.code}</strong></td>
                    <td>{r.diameter}</td>
                    <td>{r.area}</td>
                    <td className="chev-cell">
                      <button
                        className="row-toggle"
                        onClick={() => toggleRow(i)}
                        aria-expanded={isOpen}
                        aria-controls={`details-${i}`}
                        title={isOpen ? "Hide details" : "Show details"}
                      >
                        <span className="chev">▾</span>
                      </button>
                    </td>
                  </tr>

                  {/* details row */}
                  <tr id={`details-${i}`} className={`details-row ${isOpen ? "show" : ""}`}>
                    <td colSpan={4}>
                      {loading ? (
                        <div className="variant-loading">Loading live prices…</div>
                      ) : (
                        <ul className="variant-list">
                          {r.variants.map((v) => {
                            const live = pick(r.code, v.length);
                            const price = live?.price ?? v.price;
                            const availability = live?.availability ?? v.availability;

                            return (
                              <li className="variant" key={v.length}>
                                <span className="variant-length">{v.length}</span>
                                <span className="variant-item"><strong>Price:</strong> {safe(price)}</span>
                                <span className="variant-item"><strong>Availability:</strong> {safe(availability)}</span>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GalvRebar;
