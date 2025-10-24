
// Komponenta pro zobrazení jednoho leadu
import React from 'react';

export function LeadCard({ name, phone }: { name: string; phone: string }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{phone}</p>
    </div>
  );
}
