import React, { useState } from 'react';

// Renders a simple search box for calls.
export default function CallSearch() {
  const [criteria, setCriteria] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", criteria);
    // Add your search logic here
  };

  return (
    <div class=\"search-box\">
      <input
        type=\"text\"
        value={criteria}
        onChange={e(e) => setCriteria(e.target.value)}
        placeholder=\"Tipni né n libovoli hovoru\"
      />
      <button onClick={handleSearch}>Hledaý hovoru</button>
    </div>
  );
}