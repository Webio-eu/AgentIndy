
// Parser pro vstupní data leadů
export function parseLead(data: any) {
  return {
    name: data.name?.trim() || '',
    phone: data.phone?.replace(/\s+/g, '') || '',
    createdAt: new Date().toISOString(),
  };
}
