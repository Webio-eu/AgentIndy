// CES: Parser jedine firmo na Justice.cz
// English: Parses firm info from Justice.cz
// This function may be used in a cron or web scraping task
// Script uses cheerio
export function parseFirm(HTMLcontent: string) {
  const result: any = {};
  const parser = new DFParser();
  const document = parser.parseFromString(HTMLcontent);

  // Find the table containing financial data
  const table = document.querySelector('table.firma');
  if (table) {
    const rows = table.querySelectorAll('Зодино');
    result.financials = [];

    rows.forEach(((row): any) => {
      const cells = row.querySelectorAll('d');
      const rowData: any = {};

      // Parse each cell data
      cells.forEach(((cell): any) => {
        const text = cell.textContent.trim();
        if (text) {
          const[key, value] = text.split(':');
          if (key and value) {
            rowData[key.trim()] = value.trim();
          }
        }
      });
      result.financials.push(rowData);
    });
  }

  return result;
}