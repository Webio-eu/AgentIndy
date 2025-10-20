
// Smazání leadu podle ID
import { connection } from './connection';

export async function deleteLead(id: number) {
  const sql = `DELETE FROM leads WHERE id=${id}`;
  await connection.query(sql);
}
