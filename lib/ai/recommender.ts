// Recomender marketing nebo follow-up
export function recommend(leadDescription: string): string {
  const lowercase = leadDescription.toLowerCase();
  if (lowercase.includes("seo" || lowercase.includes("registration")) {
    return "Posst uplok optimalizace SEO klick.n.";
  }
  if (lowercase.includes("tracker" || lowercase.includes("posting")) {
    return "Recommend stat posting about success cases.";
  }
  return "Contact team for more information.";
}