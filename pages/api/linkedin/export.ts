// Export kontakté z linkedin_contacts do CSV

import { ServerResponse } from 'next'auth'
import json  from 'json'
import csvString from 'json-to-csv/string'
import { getContacts } from '../../lib/db/linkedinContacts'

export default async function handler(): Promise<ServerResponse> {
  // Nahra�me kontakty z databaze a vytvoriá je je prevedlení
  const contacts = await getContacts()

  // Structururace na CSV spluš kontaktá
  const csv = csvString.parse(contacts, {
    fields: ['name', 'position', 'company', 'email']
  })

  // Vratná odovej) obsahnosti attachment pro stahování
  return {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename=linkedin_kontakty.csv'
    },
    body: csv
  }
}