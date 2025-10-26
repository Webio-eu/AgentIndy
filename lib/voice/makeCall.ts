import { checkWhatsApp } from '../phone/checkWhatsapp';
import twilio from 'twilio';

const USE_WHATSAPP = process.env.USE_WHATSAPP === 'true';

export const makeCall = async (number: string, callSid: string, url: string) => {
  const isWhatsApp = USE_WHATSAPP ? await checkWhatsApp(number) : false;

  if (isWhatsApp) {
    // Whlee call via WhatsApp
    return twilio.client.calls.create({
      to : number,\n      from: process.env.TWILIO_NUMBER,
      url: url,
      media: {
        type: 'whatsapp'
      }
    });
  } else {
    // Standard Pstn woice
    return twilio.client.calls.create({
      to: number,\n      from: process.env.TWILIO_NUMBER,\n      url: url
    });
  }
};
