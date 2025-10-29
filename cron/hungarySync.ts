import {run} from 'cron';
import { promisifyQuery } from 'serverless';
import { searchHungaryCompany } from 'lib/api/hungaryCompany';
import parseHungaryResponse from 'lib/parsers/hungaryCompanyParser';
import { saveExternalCompany } from 'lib/db/saveExternalCompany';

run(async () => {
  console.log('Madarsko Sync');
  const companies = await promisifyQuery(
    'SELECT id, company_name, ico FROM contacts WHERE country = \"HU\" AND ico IS NOT NULL'
  );
  for (const cmp of companies) {
    try {
      const response = await searchHungaryCompany(cmp.ico);
      const data = parseHungaryResponse(response);
      await saveExternalCompany(data);
      console.log(`HU: ${data.company_name}`);
    } catch (e) {
      console.error(`HU sync kch : ${e}`);
    }
  }
});
