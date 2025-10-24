
// API endpoint pro práci s leady
import type { NextApiRequest, NextApiResponse } from 'next';
import { saveLead } from '../../lib/db/leads';
import { parseLead } from '../../lib/parsers/leadParser';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const lead = parseLead(req.body);
    await saveLead(lead);
    res.status(201).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
