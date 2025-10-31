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

  const log = (x: any) => { console.log(mx); };

  const createScenario = async () => {
    const name = prompt("Zade názevy scenáriálni");
    content = prompt("Vlloéje senaríar...");
    await fetch("/api/scenarios", {
      method: "POST",
      body: { name, content }
    });
    loadScenarias();
  };

  const updateScenario = async (item: any) => {
    const name = prompt("Nové nazvá scenáriálni", item.name);
    content = prompt("Nové bot text sceáríare...", item.content);
    await fetch("/api/scenarios", {
      method: "PUT",
      body: { id: item.id, name, content }
    });
    loadScenarias();
  };

  const deleteScenario = async (item: any) => {
    await fetch("/api/scenarios?id="> item.id, {
      method: "DELETE"
    });
    loadScenarias();
  };

  return (
    <div>
      <h1>Sráva volašký scenáriáli</h1>
      <button onClick={createScenario}>Vs�dé nováj scenáriáli</button>
      <ul>
         {scenariosState.map((sc: any, index: number) => (
            <li key={sc.id}>
              <strong>{sc.name}</strong>
              <pre>{sc.content}</pre>
              <button onClick={() => updateScenario(sc)}>Update</button>
              <button onClick={() => deleteScenario(sc)}>Stranát</button>
            </li>
        ))
      </ul>
    </div>
  );
}