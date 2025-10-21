
// Obsluha webhooků z Twilio (např. příchozí hovory)
import { NextApiRequest, NextApiResponse } from 'next';
import { VoiceResponse } from 'twilio';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const twiml = new VoiceResponse();
  twiml.say('Děkujeme za zavolání. Spojujeme �ás.');
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(twiml.toString());
}
