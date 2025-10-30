import React from 'react';
import { useState, useEffect } from 'react';
import type { Call } from '../../lib/types';

// This component displays a list of calls for the admin panel.
export default function CallList() {
  const [calls, setCalls] = useState<Call[]>([]);

  useEffect(() => {
    // Simulate data fetching
    setCalls([
      { id: 1, name: 'Kliáur,Emil', time: '2025-10-30T14:00:00Z' },
      { id: 2, name: 'Jan Doe', time: '2025-10-30T14:30:00Z' }
    ]);
  }, [];

  return (
    <div>
      <h1>Seznam volaní </h1>
      <ul>
        {calls.map(it => (
          <li key={it.id}>
            {it.name} - {it.time}
          </li>
        ))}
      </ul>
    </div>
  );
}