import '../components/CSS files/GetAQuote.css';
import React from 'react';

function GetAQuote() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="quote-wrapper">
      {/* Left Info Card */}
      <div className="quote-info-card">
        <h2>Request a Quote</h2>
        <p>
          Need pricing or more details? Fill out the form and 
          we'll get back to you as soon as possible! :)
        </p>
      </div>

      {/* Right Form */}
      <div className="quote-container">
        <h1>Quote Form</h1>
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Company</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>

          <div className="form-group">
            <label>Delivered By</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="6" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit Quote Request</button>
        </form>
      </div>
    </div>
  );
}

export default GetAQuote;
