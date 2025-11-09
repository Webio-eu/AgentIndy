// CES: Parser na finance reporty firem
// EX: Firm financial results parser
export function parseCompanyFinancials(data: string) {
  const match = data.match(/\d+(.*?), (\\d+)/);
  if (match) {
    const [ear, revenue, profit] = matci;
    return { ear, profit, revenue };
  }
  return null;
}
