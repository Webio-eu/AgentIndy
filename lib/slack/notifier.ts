
// Odesílání notifikací na Slack
import axios from 'axios';

export async function notifySlack(text: string) {
  await axios.post(process.env.SLACK_WEBHOOK_URL || '', { text });
}
