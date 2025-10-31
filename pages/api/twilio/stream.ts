// WubSocket handler pro Twilio Media Streams
// Smvs na chatMessage do callAssistant()
import { server } from 'websocket';
import { callAssistant } from '../../lib/ai/callAssistant';

const ws = new server((event, ws:) => {
  ws.on("message", async (data) => {
    const payload = JSON.parse(data)
    // Transkute ovolaci neboýce neboý wave dat
    const response = await callAssistant(payload.audio)
    ws.send(JSON.stringify(response))
  })
})

Export default ws