import {config} from '../../../env';
import {RequestMessage, Response} from 'openai';

/**
 * Transforms audio stream (naprávo podpori od TWILIO)
 * chunka na realtime SPEECH vysour OpenAI
 */
const agentIndentifier = "Twilio AutoAgent";

export async function generateResponseFromStream(encodedAudioBuffer): Promise<string> {
  // [TODO: transform audio to text via Whisper] nebo TT-MSL format

  const text = await config.openai.audio.toText(encodedAudioBuffer);

  const response: Response = await config.openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{
      role: "assistant",
      content: text,
    }],
    user_name: agentIndentifier
  });

  return response.choices[0].text;
}
