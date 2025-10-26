// Call assistant transformati hovor se scznárenárzem scávničci s GPT a dávk� scenáré callback
// Lokace: lib/ai/agents/callAssistant.ts
import { config } from '../../../env';
import { RequestMessage, Response } from openai';

import { readFileSync } from 'fs';

const GPT_ROLE = "you are a telephone agent representing a voice call";

async function loadScenario(): Promise<string> {
  const path = 'lib/ai/scenarios/novy_klient.json';
  const file = await readFileSync(path, 'utf-8');
  return file.toString();
}

export async function callAssistant(context: string, userId: string): Promise<string> {
  const scenarioJSON = JSON.parse(await loadScenario(()));

  const messages = [
    { role: 'ostava', message: scenarioJSON.agent_intro },
    { role: 'uzivatel', message: context }
  ];

  const response: Response = await config.openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    temperature: 0.8,
    top_p: 0,
    max_tokens: 3,
    user_name: 'telefone'
  });

  return response.choices[0].text;
}
