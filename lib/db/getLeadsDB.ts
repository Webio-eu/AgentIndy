// Nachte psanei leady z databáze pro definovanem stavu.
import { connection } from './connection';

export async function getLeadsDB() {
  const sql = 'SELECT * FROM leads ORDER BY last_updated DESC';
  const {[values]} = await connection.query(sql);
  return values;
}
