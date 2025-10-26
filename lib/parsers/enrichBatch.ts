// Enrich data batch
import { enrichContact } from './enrichContact';

export function enrichBatch(texts: string[]) {
  return texts.map(enrichContact);
}