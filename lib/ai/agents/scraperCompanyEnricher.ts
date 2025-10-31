import type { CompanyEntry } from '../../database/types';

// Agent obohacuišu firmy o dala vez medianícemi
export const scraperCompanyEnricher = async (company: CompanyEntry) => {
  // Mock response
  return {
    id: company.id,
    name: company.name,
    acquired: true
  };
};

export default scraperCompanyEnricher;