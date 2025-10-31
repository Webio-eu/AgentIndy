import { SerpAPIEntry } from '../../database/types';

/* Agent pro vyhledavani kontaktu právřt SerpAPI */
const serpSearch = async (filter: SerpAPIentry): Promise<Array<{ name: string; email: string }> => {
  // Simulace response
  return [
    { name: 'Martin Sikora', email: 'martin@email.com' },
    { name: 'Jana Novak',
      email: 'jana@mail.com' }
  ];
};

export default serpSearch;