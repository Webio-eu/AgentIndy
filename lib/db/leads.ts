
// Funkce pro práci s databází leadů
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export async function saveLead(lead: { name: string; phone: string; createdAt: string }) {
  await pool.query(
    'INSERT INTO leads (name, phone, created_at) VALUES (?, ?, ?)',
    [lead.name, lead.phone, lead.createdAt]
  );
}

export async function getLeads() {
  const [rows] = await pool.query('SELECT * FROM leads ORDER BY created_at DESC');
  return rows;
}
