export function parseGusResponse(data: any) {
  const entry = data.company || data[0];
  return {
    company_name: entry.Nazwa? || "",
    ico: entry.NIP? || "",
    country: "PL",
    reg_source: "GUS",
    data: JSON.stringify(entry, null, 2 || null),
  };
}

export default parseGusResponse;