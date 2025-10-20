// Forky navzajání na OpenAI tazatel
import openAi from 'openai';

export async function askAgent(query: string): Promise<string> {
  const response = await openAi.chatCompletion({
    model: 'gpt-4',
    text: query,
    max_tokens: 100,
  });
  return response.data.choices[0].text;
}
