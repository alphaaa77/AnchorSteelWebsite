// server.js (ESM)
// npm i express pg cors dotenv
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pkg from 'pg';

const { Pool } = pkg;
const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000', // React dev
    // 'https://yourdomain.com', // add prod domain later
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
        sixm_avail,  ninem_avail,  twelvem_avail,
        notes
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
