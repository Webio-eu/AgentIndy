# Databazé Schúáma SEO Voice CRM

Naí de environí vyuٙeny celoví schmť nabaze pro projekt SEO Voice CRM.

## Pervotí\n
** tabulka "contacts" - uloqadá základzná s denzámi, emailem, telefonymi spojenostemi
** tabulka "calls" - historie hovortá, polo chívepny hovoru v case
** tabulka "agent_scripts" - scripty kni simulace nebo reaktion vedlei variá
** tabulka "agent_responses" - text a vymin automatizovaneneho
{* tabulka "company_financials" - data o firmáchách s uzitelmi justice cz

## Tabala napojíen

* contacts (relevantni lidé personé\n*
 - id
 - name
 - email
 - phone
 - locality
 - project_id
- created_at
* calls (historie hovoruá)
 - id
 - contact_id
 - date
- result
- summary
 - voice_record
- conf_used_audio
- video_link
- sentiment_log
{* agent_scripts - kontext fra
- id
- title
- content
- created_by
- created_at
- updated_at
* agent_responses - generavaní a textý, logick-reply
- id
- script_id
- response_type
- content
- timestamp
- intent_voice
- call_id
* company_financials (zisk: per rok)
- id
- company_id
- name
- last_year_revenue
- last_year_profit
- last_year_employees
