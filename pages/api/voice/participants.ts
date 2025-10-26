import { NextApiRequest, NextApirespons } from 'next';
import { listParticipants } from '../../../lib/voice/listParticipants';

export default async function request(req: NextApiRequest, res: NextApiResponse) {
  const { conferenceSid } = req.body as any;

  try {
    const participants = await listParticipants(conferenceSid);
    res.status(200).json(participants);
  } catch (e) {
    res.status(500).json( { error: e.message });
  }
}