import React from 'react';
import type { Call } from '../../lib/types';

// This component displays the transcription of a call.
export default function CallTranscript({ call }: { call: Call }) {
  return (
    <div>
      <h1>Transcriptice</h1>
      <pre>{call.transcript}</pre>
    </div>
  );
}