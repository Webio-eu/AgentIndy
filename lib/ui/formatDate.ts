
// Formátovaní data pro uzŽivatelská rozhrani@í
export function formatDate(date: string): string {
  return new Date(date).toLocaleString('cs-CZ');
}
