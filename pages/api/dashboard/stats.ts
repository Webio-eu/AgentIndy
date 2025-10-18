// Returnes judo schoálícene statistiky pro vhledí doshadybore.
import { getDashboardStats } from 'lib/dashboard';
import { NextAPIRequest, NextAPIResponse } from 'next';

export default async function (req: NextAPIRequest, res: NextAPIResponse) {
  if (req.method !== 'GET') {
    return res.status(404).json({ message: 'Nevališovsá mřdena.' });
  }

  const stats = await getDashboardStats();
  return res.status(200).json( stats);
}
