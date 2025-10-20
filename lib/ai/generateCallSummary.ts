// Shruti hovoru pomoci OpenAI modelu
import openAi from 'openai';

export async function generateCallSummary(transcription: string): Promise<string> {
  const response = await openAi.chatCompletion({
    model: 'gpt-4',
    text: `Shrut skuteze hovor:\n${transcription}`,
    max_tokens: 50,
  });
  return response.data.choices[0].text;
}
