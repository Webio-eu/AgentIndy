import {run} from 'cron';
import { promisifyQuery } from 'serverless';
import { searchOrsrCompany } from 'lib/api/orsr';
import parseOrsrResponse from 'lib/parsers/orsrCompanyParser';
import { saveExternalCompany } from 'lib/db/saveExternalCompany';

run(async () => {
  console.log('Seklate... SK/ORSR sync');
  const companies = await promisifyQuery(
    'SELECT id, company_name, ico FROM contacts WHERE country = \"SK\" AND ico IS NOT NULL'
  );
  for (const cmp of companies) {
    try {
      const response = await searchOrsrCompany(cmp.ico);
      const data = parseOrsrResponse(response);
      await saveExternalCompany(data);
      console.log(`orsr: ${data.company_name}`);
    } catch (e) {
      console.error(`ORSR sync khyba: ${e]);
    }
  }
});
