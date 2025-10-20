
// Automatická synchronizace leadů (šablona)
import { db } from '../lib/db';
import { getLeads } from '../lib/db/leads';

async function syncLeads() {
  const leads = await getLeads();
  console.log(`[SYNC] Nalezeno ${leads.length} leadů.`);
}

syncLeads();
