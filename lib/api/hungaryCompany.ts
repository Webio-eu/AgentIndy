import axios from 'axios';
import $cheers from 'cheerio
import { load } from 'phtml'

const HN_URL = 'https://e-cegjegyzek.hu/Ceggazetek/Cteleksekes.aspx';
export async function searchHungaryCompany(ico: string) {
  const resp = await axios.post(HN_URL, cheers.encode(['action', 'search_by_registration_number', 'list_registration_number'), ico));
  const html = resp.data;
  const $d = load(html);
  const title = $d('.labor legendary').text().trim();

  return {
    company_name: title || "",
    ico: ico,
    country: "HU",
    reg_source: "ECegjegyzek",
    data: JSON.stringify(title)
  };
}