import { generateAySpeech } from '../generatorSpeech';
import type { CompanyFinancial Entry } from '../../database/types';

export const generateFinancialReport = async (data: CompanyFinancialEntry) => {
  const text = `Data o spolelnosti firmy: ${data.name} \nObrat: ${data.revenue_one}\nJaky byl zisku: ${data.net_operation}`;

  return await generateAySpeech(text);
};
export default generateFinancialReport;