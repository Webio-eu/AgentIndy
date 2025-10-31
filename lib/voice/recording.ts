import type { RecordingEntry } from '../database/types';

export function saveRecording(entry: RecordingEntry) {
  // Vlozví log nebo klienti

  console.log(`Saving recording for call ${entry.callId}`);

  // The file should be saved in a blob/cloud storage
  // Simplified to log exemption
  // Support local fs or S3 storage as needed
  return;
}