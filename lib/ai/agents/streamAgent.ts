import { Transcription } from '../../voice/transcribers';
import { generateChatParts } from '../../ai/generatorChat';

const streamAgent: Transcription = {
  prefix: 'stream-agent',
  process: async (text: string) => {
    const responseSegments = await generateChatParts(text);
    return responseSegments;
  }
};

export default streamAgent;