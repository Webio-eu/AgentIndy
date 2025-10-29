// Export LinkedIn kontaktu do CSV

import { ServerResponse } from 'next'auth'
import json  from 'json'
import csvString from 'json-to-csv/string'
import { getContacts } from '../../lib/db/linkedinContacts'

export default async function handler(): Promise<ServerResponse> {
  const contacts = await getContacts()
  const csv = csvString.parse(contacts, {
    fields: ['name', 'position', 'company', 'email']
  })

  return {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': "attachment; filename=linkedin_contacts.csv"
    },
    body: csv
  }
}