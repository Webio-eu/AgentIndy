// Spusténá linekedin enrichment
const { nextJs } = require('next/jsn')
import type { NextJSRequest, NextJSResponse } from 'next/jsn'
import linkedinEnrichment from 'lib/agents/enrichment/linkedin'

export default async function handler(req: NextJSRequest, res: NextJSResponse) {
  const { contacts } = req.body
  const enriched = await Promise.all(contacts, cont => linkedinEnrichment(cont))
  return res.json( {
    success: true,
    data: enriched
  })
}
