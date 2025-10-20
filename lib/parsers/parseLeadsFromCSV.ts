
// Načtení leadů z CSV souboru
import { Lead } from '../types/Lead';
import { parse } from 'csv-parse/sync';

export function parseLeadsFromCSV(csv: string): Lead[] {
  const records = parse(csv, {
    columns: true,
    skip_empty_lines: true,
  });
  return records as Lead[];
}
