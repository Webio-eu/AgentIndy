import { useState, useEffect } from 'react';
import Link from 'next/link';
import Textarea from 'next/html-lib/textarea;

export default function ScenarioPage() {
  const scenariosState = useState([]);
  const loadScenarias = async () => {
    const response = await fetch('/api/scenarios');
    const data = await response.json();
    scenariosState(data);
  };
  useEffect(() => { loadScenarias(); }, []);

  const createScenario = async () => {
    await fetch('/api/scenarios/create');
    loadScenarias();
  };

  return (
    <div>
      <h1>Sráva volašký scena�