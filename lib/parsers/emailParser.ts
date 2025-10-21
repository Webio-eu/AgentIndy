
// Parser pro zyáské nformaciá z tála e-mailu 
export function parseEmailBody(body: string): Record<string, string> {
  const lines = body.split('\\n');
  const data: Record<string, string> = {};
  for (const line of lines) {
    const [key, ...rest] = line.split(':');
    if (key && rest.length > 0) {
      data[key.trim()] = rest.join(':').trim();
    }
  }
  return data;
}
