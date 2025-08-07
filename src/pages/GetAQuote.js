import '../components/GetAQuote.css';
import React, {useState} from 'react';

function GetAQuote() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 10) {
      alert('You can only upload a maximum of 10 files.');
      return;
    }
    setFiles(selectedFiles);
  };

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
          Need pricing or more details? Fill out the form and attach any relevant documents.
          We'll get back to you as soon as possible.
        </p>
      </div>

      {/* Right Form */}
      <div className="quote-container">
        <h1>Quote Form</h1>
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Last Name</label>
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

          <div className="form-group">
            <label>File Attachments (max 10)</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.png,.jpeg"
            />
            <p>{files.length} file(s) selected</p>
          </div>

          <button type="submit" className="submit-btn">Submit Quote Request</button>
        </form>
      </div>
    </div>
  );
}

export default GetAQuote;
