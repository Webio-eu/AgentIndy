
// Vytvoření shrnutí pro daný lead
import { Lead } from '../types/Lead';

export function summarizeLead(lead: Lead): string {
  return `Lead ${lead.name} má telefon ${lead.phone} a stav ${lead.status}.`;
}
