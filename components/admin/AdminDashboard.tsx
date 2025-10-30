import React, { useState, useEffect } from 'react';
import CallList from './CallList';
import CallSearch from './CallSearch';
import CallCSVExport from './CallCSVExport';

// Renders admin dashboard with call list, search, and export
export default function AdminDashboard() {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    // Simulatefetch calls
    setCalls([{
      id: 1, name: 'Kl²Ã¡ur, Emil', time: '2025-10-27T18:00:00Z'
    }]);
  }, [];

  return (
    <div className=\"admin-dashboard\">
      <h1>Admin Panel</h1>
      <CallSearch calls={calls} />
      <CallList calls={calls} />
      <CallCSVExport calls={calls} />
    </div>
  );
}