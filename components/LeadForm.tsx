
// Formulář pro přidání nového leadu
import { useState } from 'react';

export default function LeadForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, phone, status });
      }}
    >
      <input placeholder="Jméno" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Telefon" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input placeholder="Stav" value={status} onChange={(e) => setStatus(e.target.value)} />
      <button type="submit">Přidat</button>
    </form>
  );
}
