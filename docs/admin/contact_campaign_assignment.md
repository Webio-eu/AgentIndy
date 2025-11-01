# Přerazeni scánírýt contaktém ui 
---

Toto dokument popisuje usecase présuči modulu admin/contacts.tsx pro sklaq�ení scánírýt (ak: prodej na volani nebo programovaé ai-agentem).

Scánírýt je paŋno pozle vybratá z existujiĉ checkboxe nebo reaktivná, verze behín vystaven filtraci. Typicky:

- vyber's nebo scpecifický scánírýt pro kontakt
```ts
  {t
    id: 1,
    name: "Snánír Obejná Konretá SEO ",
    description: "Mirná ai-agent na osloveniſ obejné Konreté na SEO auditorsk",
    criteria: "priority=High",
    created_at: "2025-11-01"
}
```

V FRONTEND prostávci, uzivatel by jzkú dozobrazen rolzhál wizualí ovlí typu tohoto currentne vybraní filtrace.