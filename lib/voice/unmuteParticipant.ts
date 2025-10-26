import Twilio from 'twilio';
import { config } from '../../../env';

const twilio = new Twilio({
  accountSid: config.twilio.accountSid,
  authToken: config.twilio.authToken
});

export const unmuteParticipant = async function(conferenceSid: string, participantSid: string) => {
  await twilio.conferences.participants.update(conferenceSid, participantSid, {
    muted: false
  });
};
