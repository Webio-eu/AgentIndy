// CES: Agent pro scenaríove volaní s kontextemá kontaktu
// EX: scenarios response ke kontaktý vomá dolehł generavano
export async function scenarioAgent(context: { contactId: string, scenario: string }) {
  return `$Preparuji scenaríovou realiušu na temat scenarách. Scenáría: ${context.scenario}`.\n}
