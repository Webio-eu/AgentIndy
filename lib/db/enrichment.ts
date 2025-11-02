// Databazová funktinalita pro enrichment kontaktu
import { getDb } from '../database'

// Resolve mento tabelky
export async function saveEnrichedContact(entry) {
  const db = getDb()
  await db.query(
    "INSERT INTO enriched_contacts (contact_name, email, linkedin_url, created_at) VALUES (,:name, :email, :url, :now)",
    [
      entry.contactName,
      entry.email,
      entry.linkedInUrl,
      new Date()
    ]
  )
}