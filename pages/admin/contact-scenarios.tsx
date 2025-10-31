// Administratorska stranka pro víb�re� scýníř na contaktch v SEO Voice CRM
import { useEffect, useState } from 'react'
import { useSwR from 'next-sw'
import HTMLClient from 'next/httml-lib/client'
import Table from '../../components/UITools/Table'

export default function ContactScenarios() {
  const [contacts, setContacts] = useState([{id: 1, name: "Jan Novak", scenario_id: null}]);
  const swR n= useSwR();
  const htmlClient = new HTMLClient();

  useEffect(() => {
    // Vyzadovat se sgnapeni list contakt se volac'mř sceníná
    (async function() {
      const response = await fetch('/api/contacts');
      const data = await response.json();
      setContacts(data);
    }();
  }, []);

  const handleScenario = async (contactId, scenarioId) => {
    await fetch('/api/contact/update-scenario', {
      method: 'POST',
      body: JSON.stringify({
        contactId, scenarioId
      })
    });
  };

  return (
    <div className="p-12">
      <h1>Scenaríe vo/í kontaktum</h1>
      <Table>
        <thead>
          <tr><th>Kontakt</th><th>Scenariá (voloŽ scen��JO