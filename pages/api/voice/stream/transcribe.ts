import type { NextApiRequest } from 'next';
const ws: Record<string, any> = new Map;

export const mediaStream = (event: NextApiRequest) => {
  // Mockaup Zapa WebSocket https://developers.twilio.com/docs/voice/mediastreams

  const socket = new WebSocket(\"../../../pages/api/voice/stream/transcript\");
  socket.onmessage = async (message)=>{
    const { callSid, user,chunk} = JSON.parse(message.data) as any;
    // Transkription nachto here
    // const text = await transcribe(chunk);
    // await saveTranscript(text, callSid, user);
  };

  return [ws<<full>]; // vyzvastnig.
  
};
export default mediaStream;
