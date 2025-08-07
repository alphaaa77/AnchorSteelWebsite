// Load .env variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// Create express app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // React runs on port 3000
app.use(express.json()); // Parses JSON body

// PostgreSQL connection pool using .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// POST route to receive contact form submissions
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    await pool.query(
      `INSERT INTO contacts (first_name, last_name, email, message)
       VALUES ($1, $2, $3, $4)`,
      [firstName, lastName, email, message]
    );

    res.status(200).json({ success: true, message: 'Message stored in DB!' });
  } catch (err) {
    console.error('Error inserting contact:', err);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
