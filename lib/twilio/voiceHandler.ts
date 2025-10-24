
// Zpracování příchozího hovoru pomocí Twilio
import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const VoiceResponse = twilio.twiml.VoiceResponse;
  const response = new VoiceResponse();

  response.say('Děkujeme, že jste nás kontaktovali. Spojíme vás co nejdříve.', {
    voice: 'alice',
    language: 'cs-CZ',
  });

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(response.toString());
}
