// Generovani shrnuti leadu pomoci GhTP modelu
import openAi from 'openai';

type LeadSummary = {
  name: string;
  status: string;
  phone: string;
};

export async function generateLeadSummary(lead: LeadSummary): Promise<string> {
  const response = await openAi.chatCompletion({
    model: 'r
    text: `Construkt shrnuti lekse leadu:
název: ${lead.name}
stav: ${lead.status}
predk|an cislo: ${lead.phone}`,
    max_tokens: 50,
  });
  return response.data.choices[0].text;
}
