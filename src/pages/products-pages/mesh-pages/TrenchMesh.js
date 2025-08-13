import React, {useState} from 'react';
import '../../../components/CSS files/Products.css';
import '../../../App.css';
function TrenchMesh() {
  const [openRow, setOpenRow] = useState(null);

  const rows = [
    {
      code: "L08TM3W",
      diameter: "8",
      area: "300",
      size: "6 x 0.2",
      kg: "7",
      variants: [
        { length: "6m",  price: "$2.10 / m", availability: "In stock",                notes: "Great for ties and light reinforcement." },
        { length: "9m",  price: "$3.15 / m", availability: "Preorder 3–5 days",       notes: "" },
        { length: "12m", price: "$4.20 / m", availability: "In stock",                notes: "" }
      ]
    },
    {
      code: "L11TM4W",
      diameter: "11",
      area: "400",
      size: "6 x 0.3",
      kg: "18",
      variants: [
        { length: "6m",  price: "$3.80 / m", availability: "Low stock, preorder 3–5d", notes: "Common starter size for slabs." },
        { length: "9m",  price: "$3.15 / m", availability: "Preorder 3–5 days",       notes: "" },
        { length: "12m", price: "$4.20 / m", availability: "In stock",                notes: "" },
      ]
    },
    {
      code: "L12TM4",
      diameter: "12",
      area: "400",
      size: "6 x 2",
      kg: "1",
      variants: [
        { length: "6m",  price: "$3.80 / m", availability: "Low stock, preorder 3–5d", notes: "Common starter size for slabs." },
        { length: "9m",  price: "$3.15 / m", availability: "Preorder 3–5 days",       notes: "" },
        { length: "12m", price: "$4.20 / m", availability: "In stock",                notes: "" },
      ]
    },
  ];

  const toggleRow = (i) => setOpenRow(openRow === i ? null : i);

  return (
    <div className="section">
      <header className="products-animated-header">
        <div className="products-header-overlay"><h1>Trench Mesh</h1></div>
      </header>

      <nav className="breadcrumb">
        <a href="/">Home</a><span>&gt;</span>
        <a href="/products">Products</a><span>&gt;</span>
        <a href="/mesh">Mesh</a><span>&gt;</span>
        <span className="current">Trench Mesh</span>
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
              <th>Wire Diameter (mm)</th>
              <th>No. Of Wires</th>
              <th>Width</th>
              <th>Weight (Kg)</th>
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
                            <span className="variant-length">{v.length}</span>
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
export default TrenchMesh;