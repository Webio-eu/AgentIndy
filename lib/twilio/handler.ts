
// Webhook handler pro Twilio hovory
import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const VoiceResponse = twilio.twiml.VoiceResponse;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const twiml = new VoiceResponse();
  twiml.say('Děkujeme, hovor byl zaznamenán. Operátor vás brzy kontaktuje.', {
    voice: 'alice',
    language: 'cs-CZ',
  });

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(twiml.toString());
}
