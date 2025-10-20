
// Základní layout aplikace
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ padding: '2rem' }}>
      <header>
        <h1>SEO Voice CRM</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
