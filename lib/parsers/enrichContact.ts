// Enrich info with references
import { extractContactAi } from './extractContactAI';

export function enrichContact(text: string) {
  return extractContactAi(text);
}
