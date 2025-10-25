
// Komponenta dashboardu pro přehled leadů
import React from 'react';
import { Lead } from '../lib/types/lead';

export function Dashboard({ leads }: { leads: Lead[] }) {
  return (
    <div>
      <h1>Seznam leadů</h1>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            {lead.name} - {lead.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
