
// Parsování leadu z requestu
import type { NextApiRequest } from 'next';
import { Lead } from '../types/Lead';

export function parseLeadFromRequest(req: NextApiRequest): Lead {
  const { name, phone, status } = req.body;

  if (!name || !phone || !status) {
    throw new Error('Missing required lead fields');
  }

  return { name, phone, status };
}
