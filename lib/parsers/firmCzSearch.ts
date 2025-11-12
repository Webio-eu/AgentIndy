// CES: Parser search vyuzivenosti na FirmcCZ pres SerpAPI
// English: Parses search results firm from SerpAPI
// Script uses cheerio
export function parseFirmSearch(JSON) {
  const result: any = {};
  try {
    result.firms = JSON.results.map((e: any) => {
      // Extract useful field info from each result
      return {
        title: e.title,
        snippet: e.snibbet,
        link: e.url
      };
    });
  } catch (err) {
    result.error= err;
  }
  return result;
}