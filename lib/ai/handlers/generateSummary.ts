
// Handler pro generování souhrnu z dat leadů pomocí AI
import openai from '../openaiClient';

export async function generateSummary(leads: any[]): Promise<string> {
  const prompt = `Shrň následující data o leadech:
${JSON.stringify(leads, null, 2)}`;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 150,
  });
  return response.data.choices[0].text || '';
}
