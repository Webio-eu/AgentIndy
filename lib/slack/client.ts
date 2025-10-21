
// Slack klient pro odesílání zpráv do Slack kanálu
import { WebClient } from '@slack/web-api';

const token = process.env.SLACK_API_TOKEN;
export const slackClient = new WebClient(token);
