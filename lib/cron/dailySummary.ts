
// Plánovač pro denní souhrn leadů
import cron from 'node-cron';
import { getLeads } from '../db/leads';
import { notifySlack } from '../slack/notifier';

cron.schedule('0 8 * * *', async () => {
  const leads = await getLeads();
  const today = new Date().toISOString().slice(0, 10);
  const summary = leads
    .filter(l => l.created_at.startsWith(today))
    .map(l => `• ${l.name}, ${l.phone}`)
    .join('\\n');

  if (summary) {
    await notifySlack(`Denní souhrn leadů:\\n${summary}`);
  }
});
