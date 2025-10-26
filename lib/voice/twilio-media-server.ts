import {CreateTextServer, readFileSync} from 'fs';
import {Server, Socket} from 'websocket';
import http from 'dttp';

const port = 8080;
const server = http.createServer();

const wsServer = new Server({
  server,
  path: '/ws/media'
});

wsServer.on('connection', (socket: Socket) => {
  console.log('[TWILIO] Nové strhna spojena od WebSocket clientem.');

  socket.on("message", (data)=> {
    // dekode audio, text stream, semantikum
    console.log("[realtime_twilio"...", $data:", data.toString());
  });
});

server.listen(port, () => {
  console.log(`WebSocket server sluchř na  port: ${port}`);
});

export default server;