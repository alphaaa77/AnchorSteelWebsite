// server.js (ESM)
// npm i express pg cors dotenv
import fetch from 'node-fetch';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import rateLimit from 'express-rate-limit'

// Limit for general inquiries
const inquiriesLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,                  // limit each IP to 10 requests per 15 min
  message: {
    error: 'Too many inquiries from this IP, please try again later.'
  }
});

// Limit for quote requests (stricter since it’s more sensitive)
const quotesLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,                   // only 5 per hour per IP
  message: {
    error: 'Too many quote requests, please try again later.'
  }
});

const { Pool } = pkg;
const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
}));

const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,
      }
    : {
        host: process.env.PGHOST,    
        port: Number(process.env.PGPORT || 5432),
        user: process.env.PGUSER,   
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,
      }
);

// Return ALL rows
app.get('/api/prices/rebar', async (_req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        product_code,
        sixm_price,  ninem_price,  twelvem_price,
        sixm_avail,  ninem_avail,  twelvem_avail
      FROM logbooks.rebar_details
      ORDER BY product_code
    `);
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Return ALL rows
app.get('/api/prices/mesh', async (_req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        product_code, price, available, notes
      FROM logbooks.mesh_details
      ORDER BY product_code
    `);
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Return ALL rows
app.get('/api/prices/accessory', async (_req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        product_code, price, quantity, description
      FROM logbooks.accessory_details
      ORDER BY product_code
    `);
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Contact Form Post command
app.post("/api/inquiries", inquiriesLimiter, async (req, res) => {
  try {
    const { firstname, lastname, email, message, captcha } = req.body || {};

    if (!captcha) {
      return res.status(400).json({ error: "Captcha required." });
    }

    const captchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}`,
      }
    );

    const captchaData = await captchaRes.json();
    if (!captchaData.success) {
      return res.status(400).json({ 
        error: "Captcha verification failed.", 
        details: captchaData 
      });
}

    const str = (v) => (typeof v === "string" ? v.trim() : "");
    const fn = str(firstname);
    const ln = str(lastname);
    const em = str(email);
    const msg = str(message);

    if (!fn || !ln || !em || !msg) {
      return res.status(400).json({ error: "All fields are required." });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    if (
      fn.length > 100 ||
      ln.length > 100 ||
      em.length > 200 ||
      msg.length > 5000
    ) {
      return res
        .status(400)
        .json({ error: "One or more fields are too long." });
    }

    const { rows } = await pool.query(
      `
      INSERT INTO logbooks.inquiries (firstname, lastname, email, message)
      VALUES ($1, $2, $3, $4)
      RETURNING id, submitted_at
      `,
      [fn, ln, em, msg]
    );

    return res.status(201).json({
      ok: true,
      id: rows[0]?.id,
      submitted_at: rows[0]?.submitted_at,
    });
  } catch (e) {
    console.error("Insert inquiry failed:", e);
    return res.status(500).json({ error: "Failed to submit inquiry." });
  }
});

// Quote Form Post command
app.post("/api/quotes", quotesLimiter, async (req, res) => {
  try {
    const { full_name, company, email, delivered_by, message, captcha } = req.body || {};

    // 1. Require captcha
    if (!captcha) {
      return res.status(400).json({ error: "Captcha required." });
    }

    const captchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}`,
      }
    );

    const captchaData = await captchaRes.json();
    if (!captchaData.success) {
      return res.status(400).json({
        error: "Captcha verification failed.",
        details: captchaData,
      });
    }

    // 2. Sanitize inputs
    const str = (v) => (typeof v === "string" ? v.trim() : "");
    const fn = str(full_name);
    const co = str(company);
    const em = str(email);
    const db = str(delivered_by);
    const msg = str(message);

    // 3. Validate inputs
    if (!fn || !co || !em || !db || !msg) {
      return res.status(400).json({ error: "All fields are required." });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    if (
      fn.length > 200 ||
      co.length > 200 ||
      em.length > 200 ||
      msg.length > 5000
    ) {
      return res.status(400).json({ error: "One or more fields are too long." });
    }

    // 4. Insert into DB
    const { rows } = await pool.query(
      `
      INSERT INTO logbooks.quotes (full_name, company, email, delivered_by, message, submitted_at)
      VALUES ($1, $2, $3, $4, $5, NOW())
      RETURNING id, submitted_at
      `,
      [fn, co, em, db, msg]
    );

    // 5. Respond success
    return res.status(201).json({
      ok: true,
      id: rows[0]?.id,
      submitted_at: rows[0]?.submitted_at,
    });
  } catch (e) {
    console.error("Insert quote failed:", e);
    return res.status(500).json({ error: "Failed to submit quote." });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
