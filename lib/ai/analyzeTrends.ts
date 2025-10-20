// Generuje summary trendy pro vhled konverzaci�.
import { getConversationData } from '../db/conversations';
import { processTrendsList } from './natural-trends'{
// Return simple trends (tematický, pozitivnihoý, chást)
export async function getConversationSummary() {
  const data = await getConversationData();
  return processTrendsList(data);
}
