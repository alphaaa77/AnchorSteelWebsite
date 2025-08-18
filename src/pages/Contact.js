// Contact.jsx
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import '../App.css';
import '../components/CSS files/Contact.css';
import placeholder from '../assets/placeholder.jpg';

function Contact() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    company: ''
  });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });
  const [captchaToken, setCaptchaToken] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.company) {
      setStatus({ state: 'success', msg: 'Thanks, your message was sent.' });
      setForm({ firstname: '', lastname: '', email: '', message: '', company: '' });
      return;
    }

    if (!captchaToken) {
      setStatus({ state: 'error', msg: 'Please complete the CAPTCHA.' });
      return;
    }

    setStatus({ state: 'loading', msg: 'Submitting…' });

    try {
      const res = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstname: form.firstname.trim(),
          lastname: form.lastname.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          captcha: captchaToken, // pass captcha to backend
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `Request failed (${res.status})`);
      }

      setStatus({
        state: 'success',
        msg: 'Thanks! We received your inquiry. Please allow 1-2 business days for us to get back to you :)',
      });
      setForm({ firstname: '', lastname: '', email: '', message: '', company: '' });
      setCaptchaToken(null);
    } catch (err) {
      setStatus({ state: 'error', msg: err.message || 'Something went wrong.' });
    }
  };

  return (
    <div className="section">
      <header className="contact-animated-header">
        <div className="contact-header-overlay">
          <h1>Contact Us!</h1>
          <h3>Address:</h3>
          <p>46 Williamson Road, Ingleburn, 2565, Sydney, NSW</p>
        </div>
      </header>

      <div className="contact-form-section">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h2>Contact Form</h2>

            {/* Honeypot field: hide visually but keep in DOM */}
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={onChange}
              autoComplete="off"
              tabIndex="-1"
              style={{ position: 'absolute', left: '-9999px', height: 0, width: 0 }}
              aria-hidden="true"
            />

            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your first name"
              value={form.firstname}
              onChange={onChange}
              required
              maxLength={100}
            />

            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              value={form.lastname}
              onChange={onChange}
              required
              maxLength={100}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={onChange}
              required
              maxLength={200}
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows="5"
              value={form.message}
              onChange={onChange}
              required
              maxLength={5000}
            ></textarea>

            {status.state === 'error' && (
              <p style={{ marginTop: 8, color: 'crimson' }}>{status.msg}</p>
            )}
            {status.state === 'success' && (
              <p style={{ marginTop: 8, color: 'seagreen' }}>{status.msg}</p>
            )}
                  <ReCAPTCHA
              sitekey="6Lc0ZqkrAAAAALrQlbXyw7Qd5rmAov7QRyf2CgD-"
              onChange={(token) => setCaptchaToken(token)}
            />

            <button type="submit" disabled={status.state === 'loading'}>
                {status.state === 'loading' ? 'Submitting…' : 'Submit'}
            </button>
          </form>

          <div className="contact-info-card">
            <img src={placeholder} alt="Get in Touch" />
            <div className="info-content">
              <h3>Get in Touch With Us</h3>
              <p>We’ll be happy to help with any inquiries, quotes, or general information.</p>
              <p>Expect a friendly reply within 1–2 business days.</p>
              <h3>Address:</h3>
              <p>46 Williamson Road</p>
              <p>Ingleburn, 2565</p>
              <p>Sydney, NSW</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid"> 
        <div className="vertical-card"> 
            <div className="card-text"> 
                <h3>Someone</h3> 
                <h3>Email:</h3> 
                <p>someone@anchorsteel.com.au</p> 
                <h3>Phone:</h3> <p>+123123123</p> 
            </div> 
        </div> 
            <div className="vertical-card"> 
                <div className="card-text"> 
                    <h3>Someone 2</h3> 
                    <h3>Email:</h3> 
                    <p>someone2@anchorsteel.com.au</p> 
                    <h3>Phone:</h3> 
                    <p>+123123123</p> 
                </div> 
            </div> 

            <div className="vertical-card"> 
                <div className="card-text"> 
                    <h3>Someone 3</h3> 
                    <h3>Email:</h3> 
                    <p>someone3@anchorsteel.com.au</p> 
                    <h3>Phone:</h3> 
                    <p>+123123123</p> 
                </div>
            </div> 
            <div className="vertical-card"> 
                <div className="card-text"> 
                    <h3>Someone 4</h3> 
                    <h3>Email:</h3> 
                    <p>someone4@anchorsteel.com.au</p> 
                    <h3>Phone:</h3> 
                    <p>+123123123</p>
                </div> 
            </div> 
        </div> 
    </div>
  );
}

export default Contact;
