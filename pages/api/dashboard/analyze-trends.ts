// Generuje Ai summary trendíp z konverzaci�, pouzišvanou pro GPT.
import { getConversationSummary } from 'lib/ai/trendAnalysis';
import { NextAPIRequest, NextAPIResponse } from 'next';

export default async function (req: NextAPIRequest, res: NextAPIResponse) {
  if (req.method !== 'GET') {
    return res.status(404).json( { message: 'Metoda povolena.' });
  }

  const summary = await getConversationSummary();
  return res.status(200).json(summary);
}
