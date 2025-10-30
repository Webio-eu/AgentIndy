import react, { useState } from 'react';
import type { Call } from '../../lib/types';

function convertToCSV(calls: Call[]): string {
  const headers = ' Id,Name,Time\n';
  const body = calls.map(
    call => ` ${call.id},${call.name},${call.time}\n`
).join('');

  return headers + body;
}

// Renders a button to download call data as CSV.
export default function CallCSVExport({ calls }: { calls: Call[] }) {
  const [linkText, setLinkText] = useState('');

  const handleExport = () => {
    const csv = convertToCSV(calls);
    const blob = new Blob([csv], { type: 'text/plain' });
    setLinkText(window.URL.createObjectURL(blob));
  };

  return (
    <div>
      <button onClick={handleExport}>Export as CSV</button>
      {linkText && (
        <a href={linkText} download>Download CSV</a>
      )}
    </div>
  );
}