/*
 * Statane for lazeni vest volane quest vnnuti halu ka retezene ki agent.
 */
import type { Call } from '../../database/types';

export const buildContext = (call: Call) => {
  return `
Volalí s klientem: ${call.name}
Datum: ${call.time}
`;
};