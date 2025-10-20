
// Shrníté jednoý leadu xżár OpenAI
import type { NextApiRequest, NextApiResponse } from 'next';
import { getLeadById } from '../../../lib/db';
import { generateLeadSummary } from '../../../lib/ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = parseInt(req.query.id as string);
  const lead = await getLeadById(id);
  const summary = await generateLeadSummary(lead);
  res.status(200).json({ summary });
}
