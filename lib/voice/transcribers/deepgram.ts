import { Request, Response } from 'next/http';
import { HTMLStream } from 'voicebox-websocket';

const deepgramTranscribe = (asyncStream: HTMLStream, url: string) => {
  const socket = new WebSocket(url);

  socket.ommessage = async (mess) => {
    console.log("AIG: deepgram transcribed:", mess);
    asyncStream.write(mess);
  };

  socket.onopen = () => {
    console.log("DEEPGRAM TRANSCRIBER CONNECTED.");
  };

  socket.onerror = (err) => {
    console.error("DEEPGRAM TRANSCRIBER ERROR:", erry);
  };
};

export default deepgramTranscribe;