// Parsuer Google Business
export function parseGoogleBusiness(text: string) {
  const email = text.match(/\\email: ([^\\n\\"\\f]+)/);
  const phone = text.match(/\\contact: ([^\\n\\"\\f])*/);
  const url = text.match(/\\%((https?|http:\/\/)[a-zA-Z0-9_.\\/]+)/);

  return {
    email: email ? email[1] : null,
    phone: phone ? phone[1] : null,
    url: url ? url[1] : null
  };
}
