import React, {useState} from 'react';
import '../../../components/CSS files/Products.css';
import '../../../App.css';
function SquareMesh() {
  const [openRow, setOpenRow] = useState(null);

  const rows = [
    {
      code: "SL72",
      diameter: "7",
      area: "200x200",
      size: "6 x 2.4",
      cover: "12.56",
      kg: "41",
      variants: [
        { length: "6m",  price: "$2.10 / sheet", availability: "In stock",                notes: "Great for ties and light reinforcement." },
      ]
    },
    {
      code: "SL81",
      diameter: "8",
      area: "200x200",
      size: "6 x 2.4",
      cover: "12.56",
      kg: "105",
      variants: [
        { length: "6m",  price: "$2.10 / sheet", availability: "In stock",                notes: "Great for ties and light reinforcement." },
      ]
    },
    {
      code: "SL82",
      diameter: "8",
      area: "200x200",
      size: "6 x 2.4",
      cover: "12.56",
      kg: "52",
      variants: [
        { length: "6m",  price: "$2.10 / sheet", availability: "In stock",                notes: "Great for ties and light reinforcement." },
      ]
    },
    {
      code: "SL92",
      diameter: "9",
      area: "200x200",
      size: "6 x 2.4",
      cover: "12.56",
      kg: "65",
      variants: [
        { length: "6m",  price: "$3.80 / sheet", availability: "Low stock, preorder 3–5d", notes: "Common starter size for slabs." },
      ]
    },
    {
      code: "SL102",
      diameter: "10",
      area: "200x200",
      size: "6 x 2.4",
      cover: "12.56",
      kg: "80",
      variants: [
        { length: "6m",  price: "$3.80 / sheet", availability: "Low stock, preorder 3–5d", notes: "Common starter size for slabs." },
      ]
    },
  ];

  const toggleRow = (i) => setOpenRow(openRow === i ? null : i);

  return (
    <div className="section">
      <header className="products-animated-header">
        <div className="products-header-overlay"><h1>Square Mesh</h1></div>
      </header>

      <nav className="breadcrumb">
        <a href="/">Home</a><span>&gt;</span>
        <a href="/products">Products</a><span>&gt;</span>
        <a href="/mesh">Mesh</a><span>&gt;</span>
        <span className="current">Square Mesh</span>
      </nav>

      <p className="product-intro" style={{fontFamily: 'Poppins, sans-serif'}}>
        Et ea mollit sint reprehenderit quis exercitation tempor ullamco laborum aute reprehenderit do sint
        excepteur. Duis consectetur commodo qui cupidatat esse consequat. Mollit irure proident ullamco dolor est
        et mollit consequat nulla id dolor ut aute.
      </p>

<div className="prod-table-wrap">
      <table className="prod-table">
        <thead>
          <tr>
            <th>Product Code</th>
            <th>Diameter (mm)</th>
            <th>Spacing (mm) (L x T)</th>
            <th>Size (m)</th>
            <th>Net Coverage (mm)</th>
            <th>Weight (kg)</th>
            <th aria-hidden="true"></th> {/* chevron column */}
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
                  <td>{r.size}</td>
                  <td>{r.cover}</td>
                  <td>{r.kg}</td>
                  {/* removed r.stock cell to match 4 headers */}
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
                  {/* colspan must match number of <th> in thead */}
                  <td colSpan={6}>
                    <ul className="variant-list">
                      {r.variants.map((v) => (
                        <li className="variant" key={v.length}>
                          <span className="variant-item"><strong>Price:</strong> {v.price}</span>
                          <span className="variant-item"><strong>Availability:</strong> {v.availability}</span>
                          {v.notes && <span className="variant-item"><strong>Notes:</strong> {v.notes}</span>}
                        </li>
                      ))}
                    </ul>
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