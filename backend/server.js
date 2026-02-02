// server.js (ESM)
// npm i express pg cors dotenv node-fetch express-rate-limit helmet
import fetch from "node-fetch";
import "dotenv/config";
import express from "express";
import cors from "cors";
import pkg from "pg";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const { Pool } = pkg;
const app = express();

/**
 * =========================
 * CORS (must be FIRST)
 * =========================
 */
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, cb) => {
    // allow server-to-server/no-origin requests (curl/postman)
    if (!origin) return cb(null, true);

    const ok = allowedOrigins.includes(origin);
    console.log("CORS origin:", origin, "allowed:", ok);

    // cb(null, true|false). Don't throw errors here.
    return cb(null, ok);
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

// Apply CORS globally (before anything else)
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // ensure preflight always gets a response

/**
 * =========================
 * Security + body parsing
 * =========================
 */
app.use(helmet());
app.use(express.json());

/**
 * =========================
 * Rate limiters
 * =========================
 */
// Limit for general inquiries
const inquiriesLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { error: "Too many inquiries from this IP, please try again later." },
});

// Limit for quote requests
const quotesLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { error: "Too many quote requests, please try again later." },
});

/**
 * =========================
 * Postgres pool
 * =========================
 */
const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : false,
      }
    : {
        host: process.env.PGHOST,
        port: Number(process.env.PGPORT || 5432),
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : false,
      }
);

/**
 * =========================
 * Helpers
 * =========================
 */
function str(v) {
  return typeof v === "string" ? v.trim() : "";
}

async function verifyRecaptcha(token) {
  if (!token) return { ok: false, error: "Captcha required." };
  if (!process.env.RECAPTCHA_SECRET) {
    return { ok: false, error: "Server misconfigured: RECAPTCHA_SECRET missing." };
  }

  const captchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${encodeURIComponent(process.env.RECAPTCHA_SECRET)}&response=${encodeURIComponent(
      token
    )}`,
  });

  const data = await captchaRes.json();
  if (!data.success) {
    return { ok: false, error: "Captcha verification failed.", details: data };
  }

  return { ok: true, details: data };
}

/**
 * =========================
 * Routes
 * =========================
 */

// Health check
app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true, status: "healthy" });
});

// Return ALL rows
app.get("/api/prices/rebar", async (_req, res, next) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        product_code,
        sixm_avail,  ninem_avail,  twelvem_avail
      FROM logbooks.rebar_details
      ORDER BY product_code
    `);
    res.json(rows);
  } catch (e) {
    next(e);
  }
});

// Return ALL rows
app.get("/api/prices/mesh", async (_req, res, next) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        product_code, available, notes
      FROM logbooks.mesh_details
      ORDER BY product_code
    `);
    res.json(rows);
  } catch (e) {
    next(e);
  }
});

// Return ALL rows
app.get("/api/prices/accessory", async (_req, res, next) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        product_code, quantity, description
      FROM logbooks.accessory_details
      ORDER BY product_code
    `);
    res.json(rows);
  } catch (e) {
    next(e);
  }
});

// Contact Form
app.post("/api/inquiries", inquiriesLimiter, async (req, res, next) => {
  try {
    console.log("POST /api/inquiries hit", { origin: req.headers.origin });

    const { firstname, lastname, email, message, captcha } = req.body || {};

    // captcha
    const cap = await verifyRecaptcha(captcha);
    if (!cap.ok) return res.status(400).json({ error: cap.error, details: cap.details });

    // sanitize
    const fn = str(firstname);
    const ln = str(lastname);
    const em = str(email);
    const msg = str(message);

    // validate
    if (!fn || !ln || !em || !msg) {
      return res.status(400).json({ error: "All fields are required." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      return res.status(400).json({ error: "Invalid email address." });
    }
    if (fn.length > 100 || ln.length > 100 || em.length > 200 || msg.length > 5000) {
      return res.status(400).json({ error: "One or more fields are too long." });
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
    next(e);
  }
});

// Quote Form
app.post("/api/quotes", quotesLimiter, async (req, res, next) => {
  try {
    console.log("POST /api/quotes hit", { origin: req.headers.origin });

    const { full_name, company, email, delivered_by, message, captcha } = req.body || {};

    // captcha
    const cap = await verifyRecaptcha(captcha);
    if (!cap.ok) return res.status(400).json({ error: cap.error, details: cap.details });

    // sanitize
    const fn = str(full_name);
    const co = str(company);
    const em = str(email);
    const db = str(delivered_by);
    const msg = str(message);

    // validate
    if (!fn || !co || !em || !db || !msg) {
      return res.status(400).json({ error: "All fields are required." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      return res.status(400).json({ error: "Invalid email address." });
    }
    if (fn.length > 200 || co.length > 200 || em.length > 200 || msg.length > 5000) {
      return res.status(400).json({ error: "One or more fields are too long." });
    }

    const { rows } = await pool.query(
      `
      INSERT INTO logbooks.quotes (full_name, company, email, delivered_by, message, submitted_at)
      VALUES ($1, $2, $3, $4, $5, NOW())
      RETURNING id, submitted_at
      `,
      [fn, co, em, db, msg]
    );

    return res.status(201).json({
      ok: true,
      id: rows[0]?.id,
      submitted_at: rows[0]?.submitted_at,
    });
  } catch (e) {
    next(e);
  }
});

/**
 * =========================
 * Error handler (LAST)
 * Ensures you don't get "mystery CORS" masking real errors.
 * =========================
 */
app.use((err, req, res, _next) => {
  console.error("Unhandled error:", err);

  // Ensure CORS headers even on error responses
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");

  res.status(500).json({ error: err?.message || "Server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
