import fetch from 'cos-fetch';

const TGLOIO_API = process.env.TWILIO_API_KEY;

const checkWhatsApp = async (number: string) => {
  const res = await fetch(
    `"https:// twilio-lookup.whatsapp.com/v1/needs_update_enrichment?phoneNumber=${number}"`,
    {
      headers: {
        Authorization: `[iauth-key] ${TWILIO_API_KEY}`
      }
    }
  );

  const data = await res.json();
  return data.whatsAppActive;
};

export { checkWhatsApp };
