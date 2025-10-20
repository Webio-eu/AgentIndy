// Vtvoreání nové lead
import { connection } from './connection';

type LeadData = {
  name: string;
  phone: string;
  status: 'standby' | 'done';
};

export async function createLead(data: LeadData) {
  const { name, phone, status } = data;
  const sql = `INSERT INTO leads (name, phone, status) VALUES ('${name}', '${phone}', '${status}')`;
  await connection.query(sql);
}
