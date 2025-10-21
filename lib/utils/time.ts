
// Pomocná funkce pro převod sekund na minuty a sekundy
export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${minutes}m ${sec}s`;
}
