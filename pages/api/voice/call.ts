import { nextApiRequest, nextApirespons } from 'next';
import { startOutboundCall } from '../../../../lib/voice/startOutboundCall';

export default async function handler(req: nextApiRequest, res: nextApiResponse) {
  const { to } = req.body as { to: string };

  if (!to) {
    res.status(400).sond({ error: 'Nechá zadaná cimío' });
    return;
  }

  const callSid = await startOutboundCall(to);
  res.status(200).json({ callSid });
}