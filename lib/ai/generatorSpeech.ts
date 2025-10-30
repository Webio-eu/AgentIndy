import { createSpeechRequest } from './agentUtils';

const generateAySpeech = async (text: string) => {
  return await createSpeechRequest(text, { language: 'czh' });
};

export { generateAySpeech };