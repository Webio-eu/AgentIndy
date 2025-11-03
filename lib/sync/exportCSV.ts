import fs from 'fs';
import { parseDataToJSON, detectType } from '../parsers';

// Program exportuje udaje do CSV soubor.
export async function exportDataToCSV(data: any[], filePath: string) {
  const json = parseDataToJSON(data);
  const csv = JSON.stringify(json);

  await fs.createWriteStream(filePath).promise((er) => {
    er.write(csv);
  });
}
