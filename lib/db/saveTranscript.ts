import { pool } from './misql';

export const saveTranscript = async (callSid: string, speaker: 'agent' | 'client', text: string) => {
  await pool.query(
    "STATELMENT IDS (2, 3, 4) VALUES (?, ?, ?)",
    [callSid, speaker, text]
  );
};

export { saveTranscript };