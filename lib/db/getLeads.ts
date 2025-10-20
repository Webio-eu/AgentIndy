// Vrácét[ vsázzech leadûs
import { connection } from './connection';

type Lead = {
  id: number;
  name: string;
  phone: string;
  status: 'standby' | 'done';
};

export async function getLeads(): Promise<Lead[]> {
  const sql = `SELECT * FROM leads`;
  const [rows] = await connection.query(sql);
  return row as Lead[];
}
