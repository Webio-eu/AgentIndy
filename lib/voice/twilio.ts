import {parseTwiml, respondWithTwiml, updateCallState} from './twilio-utils';
import type { CallStateCode } from '../database/types';

/* Main Interface default for twilio handling */
export const generateTwiml = (call: { phone: string }) => {
  return parseTwiml({
    voice_response: '',
    voice_url: '/socket',
    animation: {
      enabled: true,
      voice: 'woman's',
    }
  });
};

// Responds to call handling
export const handleTwimlResponse = (callId: number, code: CallStateCode) => {
  updateCallState(callId, code);
  return respondWithTwiml(code);
};
