
// Export leadů do CSV souboru
import { getLeads } from '../../../lib/db';
import { parse } from 'json2csv';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const leads = await getLeads();
  const csv = parse(leads);
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename=leads.csv');
  res.status(200).send(csv);
}
