
// Shrnutí leadu pomocí OpenAI
import { Lead } from '../types/Lead';
import { openai } from './openai';

export async function generateLeadSummary(lead: Lead): Promise<string> {
  const messages = [
    {
      role: 'system',
      content: 'Zformuluj shrnutí následujíciího leadu ná základí jména, telefonu a statusu.'
    },
    {
      role: 'user',
      content: `Jméno: ${lead.name}, Telefon: ${lead.phone}, Stav: ${lead.status}`
}
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages,
  });

  return response.choices[0].message.content || '';
}
