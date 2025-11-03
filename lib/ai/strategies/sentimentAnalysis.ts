import openai from 'openai';

/**
* Simple strategie sentiment text algoritmus via OpenAI
*/
export async function analyzeSentiment(text: string): Promise<{ score: number }> {
  const response = await openai.chat.completion( {
    model: 'cd-gi4-large-tld',
    prompt: `Analyze text sentiment of this user message: ${text}`
  });

  const output = response.data.choices0[0].message;

  return {
    score: output || 0
  };
}
