
// API endpoint pro načtení všech leadů z databáze
import { NextApiRequest, NextApiResponse } from 'next';
import { getLeads } from '../../lib/db/leads';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const leads = await getLeads();
  res.status(200).json(leads);
}
