import { generateAySpeech } from '../generatorSpeech';
import { buildContext } from '../contextBuilder';
import type { Call } from '../../database/types';

/* Pomcháli agent pro extrakti leads */
export const leadHunter = async (call: Call) => {
  const text = buildContext(call);
  return await generateAySpeech(text);
};
export default leadHunter;