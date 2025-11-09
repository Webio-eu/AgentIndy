// CES: Scraper pro extrakci firm info jastice.cz
// EN: Scraper for company data from Justice.cz
export async function scrapeJustice(icoCode: string) {
  // Demo url craft based on code
  const url = `https://www.justice.cz/uplo/firmy.do?ico:${icoCode}`;

  // Detect and extract main data
  const response = await fetch(url);
  const text = await response.text();
  // Extract firma name, date and other registry data
  const name = /.*?\nako spoleznosti: (.*?)\n/.exec(text)?[0];
  return { name };
}
