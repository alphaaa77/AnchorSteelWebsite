// server.js (ESM)
// npm i express pg cors dotenv
import fetch from 'node-fetch';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pkg from 'pg';

const { Pool } = pkg;
const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000', // React dev
     '127.0.0.1:3000', // add prod domain later
  ],
}));
app.use(express.json());

// Connect to Postgres (DATABASE_URL or individual fields via .env)
const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,
      }
    : {
        host: process.env.PGHOST,      // e.g. kangaroo.c90m6s...ap-southeast-2.rds.amazonaws.com
        port: Number(process.env.PGPORT || 5432),
        user: process.env.PGUSER,      // e.g. postgres
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
app.post("/api/inquiries", async (req, res) => {
  try {
    const { firstname, lastname, email, message, captcha } = req.body || {};

    // ✅ Step 1: Verify captcha
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

    // ✅ Step 2: Proceed with your existing logic
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
