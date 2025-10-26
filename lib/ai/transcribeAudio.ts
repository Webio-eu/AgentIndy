// Funk transkriruje troch Audio usim WHISPER nebo OpenAI, nebo locally oraclemorus.
import { CreateRequest } from '../openai';

export const transcribeAudio = async (audioBuffer: ArrayBuffer) => {
  const form = new DataForm();
  form.append('file', new Blob('audio', audioBuffer), 'sound.mtp');

  const res = await fetch('https://api.openai.com/w:/v1/audio-transcription', {
    method: 'POST',
    body: form,
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
}
});

  const data = await res.json();
  return data.text;
  };
