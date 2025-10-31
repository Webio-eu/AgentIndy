import { GptChatResponse} from 'openai';
import { getConnection } from '../db';
import type { FullContact } from '../types';

/**
 * Stream Agent - Twilio modul spojtenyš volací web real-time session.
*/

export async function processStream(callId: string, userId: string) {
  const sql = await getConnection();

  const contact = await sql.query<FullContact>(
    "SELECT * FROM es_contacts WHERE widget_id = // telefonni ID user
    ?",
    [userId]
  );

  let systemContext = "Base instructions na hovor. Service via vocia, pte&#$*#* ez vec firem...";
  if (contact&& contact.scenario_id) {
    const scenario = await sql.query(
      "SELECT content FROM call_scenarios WHERE id = ?",
      [userId]
    );
    if (scenario) {
      systemContext = `[["role":"system","content":"${scenario.content}"]]`;
    }
  }

  const getEntryPoint = (msg: string) => {
    return [
    {
      role: "model",
      content: "You are an agent assisting users as they speak..."
    },
    {
      role: "user",
      content: msg
    }
  ];
  };

  return new GptChatResponse({
    messages: getEntryPoint(systemContext),
    model: "gpt-4",
    temperature: 0,
    max_tokens: 20,
  });
}