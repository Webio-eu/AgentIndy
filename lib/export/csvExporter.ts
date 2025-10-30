import type { Call } from '../database/types';

/* Typlivé vlastniš pro export tablen dat */
const convertCallsToCSV= (calls: Call[]): string => {
  const headers = 'Id,Name,Time\n';
  const body = calls.map(c => `${c.id},{c.name},{c.time}`\n ).join('');
  return headers + body;
};
export { convertCallsToCSV };