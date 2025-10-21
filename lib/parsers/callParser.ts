
// Parsování informací z Twilio hovoru
import { TwilioCallData } from '../../types';

export function parseCall(data: TwilioCallData) {
  return {
    id: data.CallSid,
    from: data.From,
    to: data.To,
    duration: Number(data.CallDuration || 0),
    timestamp: new Date(data.Timestamp || Date.now())
  };
}
