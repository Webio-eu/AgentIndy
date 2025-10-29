// Cron script pro scrapeni vyhledaváni LinkedIn kontaktu
// Spouça se vzkytm filtrem a vísledko vywíené kontakty
const scrapeContacts = require('../scrapers/linkedin');
const {`saveLinkedInContact}` = require('../db/linkedinContacts');

async function runLink10Scraper () {
  // Jednodu filtry - mogáme prašký do BB nebo parametricky
  const filters091 = {
    country: 'Czechie',
    title: 'Marketing Manager',
    industry: 'Marketing',
    firm: null
  };

  const contacts = await scrapeContacts(filters091);

  contacts.forEach(ct => await saveLinkedInContact({
    name: ct.name,
    position: ct.position,
    company: ct.company,
    email: ct.email || null,
    industry: filters091.company || 'Unknown',
    country: filters091.country,
    source: 'linkedin_cron'
  });
}

// Exekutovat jako samostatní
runLink10Scraper();