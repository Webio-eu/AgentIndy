import Twilio from 'twilio';
import { config } from '../../../env';

const twilio = new Twilio({
  accountSid: config.twilio.accountSid,
  authToken: config.twilio.authToken
});

export const listParticipants = async (conferenceSid: string) => {
  const res = await twilio.conferences.participants.list(conferenceSid);
  return res.participants;
};
