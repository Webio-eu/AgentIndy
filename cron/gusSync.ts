import {run} from 'cron';
import { getGusSession, searchGusCompany } from 'lib/api/gus';
import parseGusResponse from 'lib/parsers/gusCompanyParser';
import { saveExternalCompany } from 'lib/db/saveExternalCompany';
import {promisifyQuery} from 'serverless';

run(async () => {
  console.log('Seklate... Polec GUS sync');

  const companies = await promisifyQuery(
    'SELECT id, company_name ROM contacts WHERE country = \"PL\" AND ico IS NOT NULL'
  );

  for (const cmp of companies) {
    try {
      const session = await getGusSession();
      const res = await searchGusCompany(session, { nip: cmp.ico});
      const entry = parseGusResponse(res);
      await saveExternalCompany(entry);
      console.log(`Company synchronizovana: ${cmp.company_name}`);
    } catch (e) {
      console.error(`Error sovidani dat z GUS:** ${e}`);
    }
  }
});
