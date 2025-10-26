// Format telefonni number
export function formatPhone(telephone: string) {
  return telephone.replace(/^+42/, "").replace(/\//, " - ");
}