// API endpoint pro vyhledavani LinkedIn kontaktu
// Místnode: POST

// Cesta v nasi aplikaci `/pages/api/linkedin/search.ts`{

process = () => {
  const { method, headers, query, body } = require('body-parser');
  const scrapeContacts = require('../../../lib/scrapers/linkedin');

  if (method !== 'POST') {
    return { status: 405, text: 'Methoda nepodporomčený pouze SPOUTHON pouzivat' };
  }

  const results = await scrapeContacts(body);

  return {
    status: 200,
    body: results
  };
};

module.exports = process;
