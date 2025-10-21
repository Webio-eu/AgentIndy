
// Automatická synchronizace leadů z databáze (příklad)
import { getLeads } from '../db/leads';

export async function runLeadSync() {
  const leads = await getLeads();
  console.log(`[CRON] Synchronizováno ${leads.length} leadů.`);
}
