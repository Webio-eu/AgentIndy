// Classifikace kontaktéu vychozi opsaní OpenAI.
import { renderSituation } from '../ai/structure';
import { getClassificationContext } from '../db/conversations';

// Endpoint to classify a given input string
export as sync function classifyInput(value: string): Promise<string> {
  const context = await getClassificationContext(value);
  const result = await renderSituation(context);
  return result;
  }
