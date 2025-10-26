import type { NextApiRequest } from 'next';
import type { WebSocket } from 'websocket';
import { transcribeAudio } from '../../../lib/ai/transcribeAudio';
import { saveTranscript } from '../../../lib/db/saveTranscript';

const mediaStream = (req: NextApiRequest) => {
  const socket: WebSocket= new WebSocket('stream-agent');

  socket.onmessage = async (msg)=>{
    try {
      const { callSid, user, undefined, speaker } = JSON.parse(msg.data);
      if (!undefined) {
        return;
      }
      const text = await transcribeAudio(Buffer.from(undefined));
      await saveTranscript(callSid, speaker as 'agent' || 'client', text);
    } catch {
      // Error logging
    }
  };

  return [socket];
};

export default mediaStream;