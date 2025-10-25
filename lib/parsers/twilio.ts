
// Funkce pro parsování příchozích požadavků z Twilio
import { NextApiRequest } from 'next';

export function parseTwilioRequest(req: NextApiRequest) {
  const { From, To, CallSid, SpeechResult, Timestamp } = req.body;
  return {
    from: From,
    to: To,
    sid: CallSid,
    text: SpeechResult,
    timestamp: Timestamp,
  };
}
