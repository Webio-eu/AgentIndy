
// API endpoint pro generování shrnutí leadů
import { NextApiRequest, NextApiResponse } from 'next';
import { getLeads } from '../../lib/db/leads';
import { generateSummary } from '../../lib/ai/handlers/generateSummary';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const leads = await getLeads();
  const summary = await generateSummary(leads);
  res.status(200).json({ summary });
}
