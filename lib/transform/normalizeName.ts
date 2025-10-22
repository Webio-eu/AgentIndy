
// Transformace pro normalizaci jména (kapitalizace)
export function normalizeName(name: string): string {
  return name
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}
