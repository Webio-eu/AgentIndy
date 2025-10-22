
// Funkce pro synchronizaci leadů z externího zdroje
import { saveLead } from '../db/leads';

export async function syncLeads() {
  // Simulovaná synchronizace - v reálném nasazení načíst z API
  const externalLeads = [
    { name: 'Nový lead', phone: '+420123456789' },
  ];
  for (const lead of externalLeads) {
    await saveLead(lead);
  }
}
