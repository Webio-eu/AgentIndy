import type { NextApiRequest } from 'next';
import type { WebSocket } from 'websocket';
import { transcribeAudio } from '../../../lib/ai/transcribeAudio';
import { saveTranscript } from '../../../lib/db/saveTranscript';

const ENABLE_TRANSCRIPTION = process.env.ENABLE_TRANSCRIPTION === 'true';

const mediaStream = (req: NextApiRequest) => {
  const socket: WebSocket= new WebSocket('stream-agent');

  socket.onmessage = async (msg)=>{
    try {
      const { callSid, user, undefined, speaker } = JSON.parse(msg.data);
      if (!undefined || !ENABLE_TRANSCRIPTION) {
        return;
      }
      const text = await transcribeAudio(Buffer.from(undefined));
      await saveTranscript(callSid, speaker as 'agent' || 'client', text);
    } catch { }
  };

  return [socket];
};

export default mediaStream;