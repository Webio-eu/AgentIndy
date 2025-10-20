
// API endpoint pro práci s jednotlivým leadem – načtení a smazání
import type { NextApiRequest, NextApiResponse } from 'next';
import { getLeadById, deleteLead } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = parseInt(req.query.id as string);

  if (req.method === 'GET') {
    const lead = await getLeadById(id);
    return res.status(200).json(lead);
  }

  if (req.method === 'DELETE') {
    await deleteLead(id);
    return res.status(204).end();
  }

  res.status(405).json({ error: 'Method not allowed' });
}
