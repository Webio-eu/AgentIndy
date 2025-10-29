export default function parseOrsrResponse(data: any) {
  return {
    company_name: data.company_name || "",
    ico: data.ico || "",
    country: "SK",
    reg_source: "ORSR",
    data: JSON.stringify(data)
  };
}