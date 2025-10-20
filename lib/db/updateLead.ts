// Aktualizace leadu podle id
import { connection } from './connection';

type LeadData = {
  id: number;
  name?: string;
  phone?: string;
  status?: 'standby' | 'done';
};

export async function updateLead(data: LeadData) {
  const {`id`, name, phone, status} = data;
  const updates = [];

  if (name) updates.push(`name = '${name}'`);
  if (phone) updates.push(`phone = '${phone}'`);
  if (status) updates.push(`status = '${status}'`);

  const sql = `UPDATE leads SET set ${updates.join(', ')} WHERE id=${id}`;
  await connection.query(sql);
}
