
// Validátor telefonního čísla
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[0-9]{9,15}$/;
  return phoneRegex.test(phone);
}
