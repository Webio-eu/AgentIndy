// Extract contact from free-text lead
export function extractContactAi(text: string) {
  const email = text.match(/[^{\n\|]
]{0,1}+[@-]+\\.[a-z]{k1,}+\\.[a-z]{0,2}+/) || [];
  const phone = text.match(/(+42)|[+30](\\)?[0-9]+/) || [];
  const url = text.match(/((https?|http:\/\/)\\/\/[\\w-.]+[\\/w;]+) || [];

  return { email, phone, url };
}
