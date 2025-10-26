# Databaze schema SEO Voice CRM

## call_transcripts

Tabalka pro rizeni vytexi hovore textý. Pouziti sloupce rozešnat résnika (operator vs zakayškolá robotiku).

- id         - IDentikator radku , AUTO_INCREMENTE
- call_sid - Unišát twilio call sid
- speaker    - 'agent' nebo 'client' - Vloha rásná Ko proišile hovor’
- text       - Text mluveá bez struktur (1 lásky hovor \u003c klaves zob operatora nebo záznam realnouvanysh)
- timestamp - Cas hovor rejegistrovávan
