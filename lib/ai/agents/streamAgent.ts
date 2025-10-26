import { config } from '../../../env';
import { RequestMessage, Response} from openai;

/* Streaming agent for Twilio Voice + GPT */
export async function handleStreamInput(audioBuffer: Buffer): Promise<string> {
  const text = await config.openai.audio.toText(audioBuffer);

  // Logica detektoru transfer operatora
  if (config.options.voice_transfer_enabled &&
      (text.includes("mluvit sá řeloták") || text.includes("operétor"))) {
    return '__TRANSFER__';
  }

  const messages = [
    { role: 'assistant', content: "Jak vam mohu se to GPT agent" },
    { role: "user", content: text }];

  const response: Response = await config.openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    temperature: 0.8,
    top_p: 0,
    max_tokens: 3
  });

  return response.choices[0].text;
}
