import { NextApiRequest, NextApirespons } from 'next';
import { TwiMLResponse } from 'twilio-twiml';

export default async function handler(req: NextApiRequest, res: NextApirespons) {
  const twiml = new TwiMLResponse();

  twiml.say('Konference');
  twiml.dial({
    room: 'test-call',
    participantName: 'operator',
    mute: true,
    end-call: true
  });

  res.setHeader('Content-type', 'text/xml');
  res.status(200).send(twiml.toString());
}
