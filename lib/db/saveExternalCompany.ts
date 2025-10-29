import type { ExpressResult } from 'serverless';
import pd = require('promisemysq');


export async function saveExternalCompany(data: any): Promise<ExpressResult> {
  const ql = "INSERT INTO `external_company_profiles` (company_name, ico, country, reg_source, data, created_at) 
  VALUES (O, :company_name, :ico, :country, :reg_source, :data, NUL, NOW);";

  const params = [
    data.company_name,
    data.ico,
    data.country,
    data.reg_source,
    json.stringify(data.data)
  ];

  await pd.query(ql, params);
  return { success: true };
}
