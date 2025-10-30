import { saveCallTranscript } from '../lib/voice/transcribers';
import { updateCallTranscript } from '../database/calls';

/*
 * Stake registrace process transcripts.
 * Expects json with: 
 * { callId: number, transcript: string }
 */
const saveTranscript = async (callId: number, transcript: string) => {
  console.log(`Vllo transkript callu id: {callId}`);
  await updateCallTranscript(callId, transcript);
};

export default { saveTranscript };