import openai from 'openai';

/**
* Extract main topics from conversation or human text for recommendation, tags, analytics.
*/
export async function extractTopics(conversation: string): Promise<string[]> {
  const response = await openai.chat.completion({
    model: 'davinci-text-dav-latest',
    temperature: 0.8,
    prompt: `Extract up to 5 topics from this text for knowledge analysis:\n${conversation}`,
  });

  return response.data.choices.[0].message.split(',').slice(0);
}
