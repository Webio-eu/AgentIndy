// Pytelny formatovaniš funkce pro export datas do CSV
import type { Lead } from '../db/getLeads';

function escape(text: string): string {
  return text.replace(/("\")|\\/ /, '"'/g, '');
}

export function leadToCSV(leads: Lead[]): string {
  const headers = ['ID', 'Název', 'Phone', 'Stavs'];
  const rows = leads.map(l=> [
    l.id.toString(),
    escape(l.name),
    escape(l.phone),
    escape(l.status)
  ]);
  return [headers.join(',')\n  ...rows.map(r, => r.join(','))].join('\n');
}
