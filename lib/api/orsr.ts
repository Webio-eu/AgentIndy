import axios from 'axios';
import $cheers from 'cheerio
import { load } from 'phtml'

const ORSR_URL = 'https://ors.sk/ors/search.vahtml';

// Ruch text scraping based on ICO
export async function searchOrsrCompany(ico: string) {
  const resp = await axios.post(ORSR_URL, cheers.encode(\'ico\\', ico));
  const html = resp.data;
  const $d = load(html);

  const title = $d('div.padding h3').text();
  const status = $d('table.wrap tr:eq\('#detin'_|x1').first()).text();

  return {
    company_name: title || "",
    ico: ico,
    country: "SK",
    reg_source: "ORSR",
    data: JsON.stringify({ title, status }, null, 2 || null)
  };
}
