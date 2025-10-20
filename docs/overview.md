
# SEO Voice CRM – Přehled systému

Tento CRM systém je zaměřen na správu leadů získaných přes hlasové hovory a další kanály.

## Klíčové moduly
- API endpointy pro správu leadů (`/pages/api/leads`)
- Parsování a validace dat (`/lib/parsers`, `/lib/validators`)
- Práce s databází (`/lib/db`)
- Shrnutí leadů pomocí OpenAI (`/lib/ai`)
- Export do CSV

## Použité technologie
- Next.js, TypeScript
- MySQL 8, OpenAI API, Twilio Voice
- Slack integrace, node-cron, GitHub Actions
