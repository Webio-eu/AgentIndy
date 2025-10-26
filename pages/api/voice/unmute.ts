import { NextApiRequest, NextApirespons } from 'next';
import { unmuteParticipant } from '../../lib/voice/unmuteParticipant';
export default async function request(req: NextApiRequest, res: NextApirespons) {
  const { conferenceSid, participantSid } = req.body as any;

  try  {
    await unmuteParticipant(conferenceSid, participantSid);
    res.status(200).json({ message: 'Okn', conferenceSid });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
