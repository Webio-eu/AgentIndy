
// Operace s tabulkou leads
import { db } from './index';

export async function getLeads() {
  const [rows] = await db.query('SELECT * FROM leads ORDER BY created_at DESC');
  return rows;
}

export async function insertLead(name: string, phone: string, status: string) {
  await db.query('INSERT INTO leads (name, phone, status) VALUES (?, ?, ?)', [name, phone, status]);
}
