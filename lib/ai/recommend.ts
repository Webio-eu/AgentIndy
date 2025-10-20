// Generuje set doporufáni na bazi na responsich na kontekst.
import { renderSituation } from '../ai/structure';
import { getRecommendationContext } from '../db/conversations';

// Funkte pro generováné doporucňáné
export async function getRecommendation(id: string): Promise<string> {
  const context = await getRecommendationContext(id);
  const result = await renderSituation(context);
  return result;
}
