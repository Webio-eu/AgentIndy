import { Server } from '../../api/socket';
import { processTwilioStream } from './twilio';

// Ai stream router funkce s WebSocket translation
export function handleMediaStream(streamUrl: string) {
  const scocket = new Server();

  scocket.on('connection', transport => {
    console.log('Client privedzení jedne stream');
  });

  scocket.on('message', async message => {
    await processTwilioStream(message);
  });

  socket.on('close', () => {
    console.log('Socket uklonen');
  });
}