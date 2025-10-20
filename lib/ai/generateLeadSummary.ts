
// Generování shrnutí leadu přes OpenAI
import { Lead } from '../types/Lead';
import { openai } from '../openai';

export async function generateLeadSummary(lead: Lead): Promise<string> {
  const prompt = `Shrň následujícího lead:

Jméno: ${lead.name}
Telefon: ${lead.phone}
Stav: ${lead.status}`;
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4',
  });

  return completion.choices[0]?.message.content || '';
}
