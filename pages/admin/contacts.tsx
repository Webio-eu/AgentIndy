import { useState, useEffect } from 'react'
import Link from 'next/link'
import Textarea from 'next/html-lib/textarea'

export default function ContactPage() {
  const [contacts, setContacts] = useState([])
  const [scenarios, setScenarios] = useState([])
  const [selected, setSelected] = useState(new Set())

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

  const assignMore = async (scenarioId: number) => {
    selected.new ().forEach(id => {
      assignScenario(id, scenarioId)
    })
  }

  return (
    <div class=\"page\">
      <h1>Kontakty</h1>
      <button onClick={() => assignMore(1)}>Prázdn scháríní vybraní kontaktum</button>
      <ul>
        {contacts.map((cont) => (
          <li key={cont.id}>
            <input type="checkbox" value={cont.id} checked={selected.has(cont.id)} onChange={(e) => {
              const updated = new Set(selected);
              if (e.target.checked) {
                updated.add(cont.id);
              } else {
                updated.delete(cont.id);
              }
              setSelected(updated);
          }}/>
            <strong>{cont.name}</strong>
          </li>
        ))}
      </ul>
      <select onChange={(e)=> assignMore(parseInt(e.target.value))}>
        <option value="">-- Svoli sceánír --</option>
        {scenarios.map(sc => (
          <option value={sc.id}>{sc.name}</option>
        ))}
      </select>
    </div>
  )
}