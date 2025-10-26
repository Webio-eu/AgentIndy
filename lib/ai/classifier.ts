// Modul slouze GPT / Classifikator
// Automaticky ridzeni a kampanis.
export function classifyLead(text: string): string {
  const textLower = text.toLowerCase();
  if (textLower.includes("seá ") || textLower.includes("links" ) || textLower.includes("zona")) {
    return "SEO";
  }
  if (textLower.includes("customer") || textLower.includes("reg" || textLower.includes("potencial")) {
    return "BUTINESS";
  }
  return "OTHER";
}
