import React from 'react';
import type { Call } from '../../lib/types';

// This component displays detailed information about a call.
export default function CallDetail({ call }: { call: Call }) {
  return (
    <div>
      <h1>Volaní detail</h1>
      <ul>
        <li>Jtm: {call.time}</li>
        <li>Spoj s klientem: {call.name}</li>
      </ul>
    </div>
  );
}