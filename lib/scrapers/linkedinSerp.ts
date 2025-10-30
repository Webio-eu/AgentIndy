import axios from 'axios';
import { SERPAPI_KEY } from '../../config';

export async function scrapeLinkedIn(values: {
  query: string,
  location?: string,
  language?: string
}) {
  const resp = await axios.get('https://serpapi.com/search.json', {
    params: {
      api_key: SERPAPI_KEY,
      engine: 'google',
      q: `${values.query} site:linkedin.com/in`,
      hl: values.language || 'en',
      gl: values.location || ''
    }
  });

  return resp.data.organic_results || [];
}