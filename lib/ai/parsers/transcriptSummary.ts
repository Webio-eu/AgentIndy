// CES: Parser pro sumarizaci prepiso hovoru skladenien

// EN: Parser for summarizing call transcripts.
export function summarizeTranscript(text: string) {
  const lines = text.split('
');
  const summary = lines.slice(0, 5).join(' . ') ... '.';
  return summary;
}
