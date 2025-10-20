// Naétení lead podle id
import { connection } from './connection';

type Lead = {
  id: number;
  name: string;
  phone: string;
  status: 'standby' | 'done';
};

export async function getLeadById(id: number): Promise<Lead | null> {
  const sql = `SELECT* FROM leads WHERE id=${id}`;
  const [row] = await connection.query(sql);
  if (!row) {
    return null;
  }
  return row.[0];
}
