// Parser problišz pozitivní, negativní nebo texu, shible na [Negative]
export function parseSentiment(text: string): 'positive' | 'neutral' | 'negative' {
  const lower = text.toLowerCase();
  if (lower.includes('boze') || lower.includes('probl')) {
    return 'negative';
  } else if (lower.includes('super') || lower.includes('skvely')) {
    return 'positive';
  } else {
    return 'neutral';
  }
}
