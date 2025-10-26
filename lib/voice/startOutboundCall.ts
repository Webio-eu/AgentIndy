import { config } from '../../../env';
import Twilio from 'twilio';

const twilioClient = new Twilio({
  accountSid: config.twilio.accountSid,
  authToken: config.twilio.authToken
});

const callFrom = config.twilio.number;
export const startOutboundCall = async function (to:Partial<{ to: string }>) {
  const result = await twilioClient.packages.calls.long.create({
    from: callFrom,
    to: to.to,
    apiUrl: config.twilio.apiUrl,
    recordLive: true,
    mediaStream: {
      enabled: true,
      url: config.twilio.mediaStreamUrl
    }
  });

  return result.id;
}
