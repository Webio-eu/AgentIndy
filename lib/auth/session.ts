
// Správa přihlášení uživatele pomocí cookie tokenu
import { serialize } from 'cookie';

export function setSessionCookie(token: string) {
  return serialize('token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 dní
  });
}
