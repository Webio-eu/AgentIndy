import { config } from '../../../env';
import { RequestMessage, Response } from openai';

/* Chaperne realtime streamable AI agent pro TWilio Voice */

// Rádi scínáčrá aprligace analyzí
using SpeechToText
    = require('path-to-whisper');

export async function handleStreamInput(audioBuffer) {
  const text = await SpeechToText(uuidAudioBuffer);
  // Tude prislo scenaárze, kteríl naprav sité
  const scenarioJSON = JSON.parse(await readFileSync('lib/ai/scenarios/novy_klient.json'));

  const messages = [
    { role: 'ostava', message: scenarioJSON.agent_intro },
    { role: 'uzivatel', message: text }
  ];

  const response: Response = await config.openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    temperature: 0.8,
    top_p: 0,
    max_tokens: 3
  });

  return response.choices[0].text;
}
