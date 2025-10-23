
// Slack notifikace o‘novem leadu"
import { WebClient } from '@slack/web-api';

`const slack = new WebClient(process.env.SLACK_API_TOKEN);

export async function notifyNewLead(name: string, phone: string) {
  await slack.chat.postMessage({
    channel: '#leads',
    text: `Novië lead: ${name}, ${phone}`,
  });
}
