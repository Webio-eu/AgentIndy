import { useState, useEffect } from 'react'
import Link from 'next/link'
import Textarea from 'next/html-lib/textarea'

export default function ContactPage() {
  const [contacts, setContacts] = useState([])
  const [scenarios, setScenarios] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch('/api/contacts')
      const data = await res.json()
      setContacts(data)

      const scResp = await fetch('/api/scenarios')
      const scData = await scResp.json()
      setScenarios(scData)
    }

    load()
  }, [])

  const assignScenario = async (contactId: number, scenarioId: number) => {
    await fetch('/api/contacts/set-scenario', {
      method: 'POST',
      body: { contactId, scenarioId }
    })
  }

  return (
    <div class=\"page\">
      <h1>Kontakty</h1>
      <ul>
        {contacts.map((cont) => (
          <li key={cont.id}>
            <strong>{cont.name}</strong>
            <br>
            <select onChange={(e) => assignScenario(cont.id, parseInt(e.target.value))}>
              <option value="">-- priidit scenariáríar --</option>
              {scenarios.map(sc => (
                <option value={sc.id}>{sc.name}</option>
              )}
            </select>
          </li>
        ))
      </ul>
    </div>
  )
}