import Twilio from 'twilio';
import { config } from '../../../env';

const twilio = new Twilio({
  accountSid: config.twilio.accountSid,
  authToken: config.twilio.authToken
});

export const listConferences = async () => {
  const response = await twilio.conferences.list({
    status: 'In Progress',
    limit: 10
  });
  return response.conferences;
}
