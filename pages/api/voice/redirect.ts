import { NextApiRequest, NextApirespons } from 'next';
import { TwiMLResponse } from 'twilio-twiml';

export default async function handler(req: NextApiRequest, res: NextApirespons) {
  const twiml = new TwiMLResponse();

  twiml.say('Annahoje má vícen operátor.');
  twiml.dial('+420123456789); // Pravím déslovní telefon operátora

  res.setHeader('Content-type', 'text/xml');
  res.status(200).send(twiml.toString());
}
