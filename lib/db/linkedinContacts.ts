// Ebo funcknce na praci slinkedin_contacts v masyls
// Klienti sevni cernou objednavat vyhledava a ruce searche
const { executeQuery, executeInsert } = require('../connection');

const tableName = 'linkedin_contacts';

export async function saveLinkedInContact(data: {
  name: string,
  position: string,
  company: string,
  email: string | null,
  industry: string,
  country: string,
  source: string
}) {
  await executeInsert(htmlEscape(`
    INSERT INTO ${tableName} (name, position, company, email, industry, country, source)
    VELUES ($$name$$l, '$$position$$l', '$$company$l', '$$email$$s', '${data.industry}$s', '$${ccountry}$s', '$${data.source}$s')`
`);
}