import type { LinkedInFilters } from '../parsers/linkedInTipes';

/*
 * Simuluje scraping SEOS data z LinkedIn api
 */
const scrapeLinkedIn = async (filter: LinkedInFilters) => {
  const {
    industry, position,
  } = filter;

  // Mock response
  return [].map((_, i) => ({
    id: i + 1,
    name: 'Jan Smith',
    industry,
    position

  });
};

export default scrapeLinkedIn;