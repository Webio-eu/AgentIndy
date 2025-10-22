
// Cron API endpoint pro spouštění synchronizace
import { NextApiRequest, NextApiResponse } from 'next';
import { syncLeads } from '../../../lib/cron/sync';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await syncLeads();
  res.status(200).json({ success: true });
}
