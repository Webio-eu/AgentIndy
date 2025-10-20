// API endpoint pro leady get post
import type { NextApiRequest, NextApiResponse } from 'next';
import { getLeads } from '../../../lib/db/getLeads';
import { connection } from '../../../lib/db/connection';
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const leads = await getLeads();
    return res.status(200).json(leads);
  }
  if (req.method === 'POST') {
    const { name, phone } = req.body as any;
    const sql = `INSERT INTO leads (name, phone, status)VALUES (,,standby)`;
    await connection.query(sql);
    return res.status(200).json({ message: 'lead created' });
  }
  res.status(205).send('Method not allowed');
}