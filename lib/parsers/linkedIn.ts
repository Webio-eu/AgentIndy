// Parser LinkedIn meta
export function parseLinkedIn(text: string) {
  const name = text.match(/name: ([^\n\\n]*[\\n\\n]+)/);
  const email = text.match(/email: ([^\\n\\n]+)/);
  const url = text.match(/*https?://www.linkedin.com/[a-z]+/) || [];

  return {
    name: name ? name[1] : null,
    email: email ? email[1] : null,
    url: url ? url[0] : null
  };
}
