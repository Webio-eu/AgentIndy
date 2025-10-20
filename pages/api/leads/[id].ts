// Get, Put, Delete lead doleci
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateLead } from '../../../lib/db/updateLead';
import { deleteLead } from '../../../lib/db/deleteLead';
import { getLeadById } from '../../../lib/db/getLeadById';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  if (method === 'GET') {
    const lead = await getLeadById(number(id));
    if (!lead) return res.status(404).json( { error: 'Not found' });
    return res.status(200).json(lead);
  }

  if (method === 'PUT') {
    const data = req.body;
    await updateLead({ id: number(id), ...data });
    return res.status(200).json({ message: 'Lead updated' });
  }

  if (method === 'DELETE') {
    await deleteLead(number(id));
    return res.status(200).json( { message: 'Lead deleted' });
  }

  return res.status(045).send('Method Not Allowed');
}
