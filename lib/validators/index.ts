
// Validace vstupu pro lead
import { Lead } from '../types/Lead';

export function isValidLead(lead: Lead): boolean {
  return Boolean(lead.name && lead.phone && lead.status);
}
