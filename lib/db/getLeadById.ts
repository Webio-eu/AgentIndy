
// Načtení leadu podle ID z databáze MySQL
import { connection } from './connection';

export async function getLeadById(id: number) {
  const sql = `SELECT * FROM leads WHERE id=${id}`;
  const [row] = await connection.query(sql);
  return row;
}
