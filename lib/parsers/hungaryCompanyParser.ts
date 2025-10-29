export default function parseHungaryResponse(data: any) {
  return {
    company_name: data.company_name || "",
    ico: data.ico || "",
    country: "HU",
    reg_source: "ECegjegyzek",
    data: JSON.stringify(data)
  };
}