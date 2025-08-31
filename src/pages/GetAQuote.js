import React, { useState } from 'react';
import '../components/CSS files/GetAQuote.css';
import ReCAPTCHA from 'react-google-recaptcha';

function GetAQuote() {
  const [form, setForm] = useState({
    full_name: '',
    company: '',
    email: '',
    delivered_by: '',
    message: '',
  });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });
  const [captchaToken, setCaptchaToken] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', msg: 'Submitting…' });

    try {
      const res = await fetch('http://localhost:5000/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.full_name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          delivered_by: form.delivered_by.trim(),
          message: form.message.trim(),
          captcha: captchaToken,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `Request failed (${res.status})`);
      }

      setStatus({
        state: 'success',
        msg: 'Thanks! Your quote request has been submitted.',
      });
      setForm({ full_name: '', company: '', email: '', delivered_by: '', message: '' });
    } catch (err) {
      setStatus({ state: 'error', msg: err.message || 'Something went wrong.' });
    }
  };

  return (
    <div className="quote-wrapper">
      <div className="quote-info-card">
        <h2>Request a Quote</h2>
        <p>Need pricing or more details? Fill out the form and we'll get back to you as soon as possible! :)</p>
      </div>

      <div className="quote-container">
        <h1>Quote Form</h1>
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="full_name" value={form.full_name} onChange={onChange} required />
          </div>

          <div className="form-group">
            <label>Company</label>
            <input type="text" name="company" value={form.company} onChange={onChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={onChange} required />
          </div>

          <div className="form-group">
            <label>Delivered By</label>
            <input type="date" name="delivered_by" value={form.delivered_by} onChange={onChange} required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="6" value={form.message} onChange={onChange} required></textarea>
          </div>

          {status.state === 'error' && <p style={{ color: 'crimson' }}>{status.msg}</p>}
          {status.state === 'success' && <p style={{ color: 'seagreen' }}>{status.msg}</p>}
                  <ReCAPTCHA
              sitekey="6Lc0ZqkrAAAAALrQlbXyw7Qd5rmAov7QRyf2CgD-"
              onChange={(token) => setCaptchaToken(token)}
            />

          <button type="submit" className="submit-btn" disabled={status.state === 'loading'}>
            {status.state === 'loading' ? 'Submitting…' : 'Submit Quote Request'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetAQuote;
