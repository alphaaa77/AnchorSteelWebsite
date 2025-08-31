import React, { useEffect, useState } from 'react';
import '../../../components/CSS files/Products.css';
import '../../../App.css';

function SquareMesh() {
  const [openRow, setOpenRow] = useState(null);
  const [dbData, setDbData] = useState({});   // { SL72: { sixm_price, sixm_avail, notes }, ... }
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/prices/mesh`) // or just '/api/prices/mesh' if using proxy
      .then(res => { if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json(); })
      .then(rows => {
        const map = {};
        rows.forEach(r => { map[r.product_code] = r; });
        setDbData(map);
      })
      .catch(e => setLoadError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const rows = [
    { code: "SL72",  diameter: "7",  area: "200x200", size: "6 x 2.4", cover: "12.56", kg: "41",
      variants: [{ availability: "In stock", notes: "Great for ties and light reinforcement." }] },
    { code: "SL81",  diameter: "8",  area: "200x200", size: "6 x 2.4", cover: "12.56", kg: "105",
      variants: [{ availability: "In stock", notes: "" }] },
    { code: "SL82",  diameter: "8",  area: "200x200", size: "6 x 2.4", cover: "12.56", kg: "52",
      variants: [{ availability: "In stock", notes: "" }] },
    { code: "SL92",  diameter: "9",  area: "200x200", size: "6 x 2.4", cover: "12.56", kg: "65",
      variants: [{ availability: "Low stock, preorder 3–5d", notes: "Common starter size for slabs." }] },
    { code: "SL102", diameter: "10", area: "200x200", size: "6 x 2.4", cover: "12.56", kg: "80",
      variants: [{ availability: "Low stock, preorder 3–5d", notes: "" }] },
  ];

const pick = (code) => {
  const row = dbData[code];
  if (!row) return null;
  return {
    availability: row.availability,
    notes: row.notes
  };
};


  const toggleRow = (i) => setOpenRow(openRow === i ? null : i);
  const safe = (v, fb = '—') => (v ?? '').toString().trim() || fb;

  return (
    <div className="section">
      <header className="page-header products-animated-header">
        <div className="page-header-overlay"><h1>Square Mesh</h1></div>
      </header>

      <nav className="breadcrumb">
        <a href="/">Home</a><span>&gt;</span>
        <a href="/products">Products</a><span>&gt;</span>
        <a href="/mesh">Mesh</a><span>&gt;</span>
        <span className="current">Square Mesh</span>
      </nav>

      <h3 className="product-intro">
        Note: Information may be subject to change.
        </h3>

      {!!loadError && <div className="error-banner">Failed to load live data: {loadError}</div>}

      <div className="prod-table-wrap">
        <table className="prod-table">
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Diameter (mm)</th>
              <th>Spacing (mm) (L x T)</th>
              <th>Size (m)</th>
              <th>Net Coverage (m²)</th>
              <th>Weight (kg)</th>
              <th aria-hidden="true"></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => {
              const isOpen = openRow === i;
              return (
                <React.Fragment key={r.code}>
                  <tr
                    className={`prod-row ${isOpen ? "open" : ""}`}
                    onClick={(e) => { if (!e.target.closest('.row-toggle')) toggleRow(i); }}
                  >
                    <td><strong>{r.code}</strong></td>
                    <td>{r.diameter}</td>
                    <td>{r.area}</td>
                    <td>{r.size}</td>
                    <td>{r.cover}</td>
                    <td>{r.kg}</td>
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

                  <tr id={`details-${i}`} className={`details-row ${isOpen ? "show" : ""}`}>
                    {/* colspan must match number of <th> (7 including chevron) */}
                    <td colSpan={7}>
                      {loading ? (
                        <div className="variant-loading">Loading availability...</div>
                      ) : (
                        <ul className="variant-list">
                          {r.variants.map((v) => {
                            const live = pick(r.code, v.length); // length is "6m" for mesh
                            const availability = live?.availability ?? v.availability;
                            const notes = (live?.notes ?? v.notes)?.trim();

                            return (
                              <li className="variant" key={v.length}>
                                <span className="variant-item"><strong>Availability:</strong> {safe(availability)}</span>
                                {safe(notes, '') && <span className="variant-item"><strong>Notes:</strong> {notes}</span>}
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
export default SquareMesh;
