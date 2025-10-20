
// Získání leadu z těla requestu
import { NextApiRequest } from 'next';
import { leadSchema } from '../validators';
import { Lead } from '../types/Lead';

export async function parseLeadFromRequest(req: NextApiRequest): Promise<Lead> {
  const data = await leadSchema.validate(req.body);
  return {
    id: 0,
    name: data.name,
    phone: data.phone,
    status: data.status,
  };
}
