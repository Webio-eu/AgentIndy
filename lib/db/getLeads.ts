
// Načtení všech leadů z databáze
import { connection } from './connection';

export async function getLeads() {
  const sql = 'SELECT * FROM leads';
  const result = await connection.query(sql);
  return result;
}
