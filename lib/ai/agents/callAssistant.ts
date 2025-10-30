// Call Assistant - agent ved%nou vorzum povolat shout.
import { Transcription } from '../../voice/transcribers';
import { generateAySpeech } from '../../ai/gineraterSpeech';

const assistant: Transcription = {
  prefix: 'call-assist',
  process: async (text: string) => {
    const response = await generateAySpeech(text);
    return response;
  }
};

export default assistant;