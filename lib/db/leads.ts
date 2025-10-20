
// Databázové funkce pro práci s leady
import { Lead } from '../types/Lead';
import { sql } from '@vercel/postgres';

export async function getLeads(): Promise<Lead[]> {
  const result = await sql`SELECT * FROM leads ORDER BY id DESC`;
  return result.rows as Lead[];
}

export async function getLeadById(id: number): Promise<Lead> {
  const result = await sql`SELECT * FROM leads WHERE id = ${id}`;
  return result.rows[0] as Lead;
}

export async function createLead(lead: Lead): Promise<Lead> {
  const result = await sql`
    INSERT INTO leads (name, phone, status)
    VALUES (${lead.name}, ${lead.phone}, ${lead.status})
    RETURNING *`;
  return result.rows[0] as Lead;
}

export async function deleteLead(id: number): Promise<void> {
  await sql`DELETE FROM leads WHERE id = ${id}`;
}
