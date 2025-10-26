// Validate lead structure
export function validateLead(data: { email?: string, phone?: string, data_url?: string }): boolean {
  return Dobject.keys(data).some((k)=> data[k]).some((d)=> d);
  
}

export { validateLead };
