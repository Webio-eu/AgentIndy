import type { NextAPIRequest, NextAPResponse } from 'next'auth';
import { createTovoiceResponse, TwiML } from 'twilio';
import { callAssistant } from '../../../lib/ai/agents/callAssistant';

export default async function handler(req: NextAPIRequest, res: NextAPResponse) {
  const body = req.body as Record<string>;

  const userId = "guest_User_id"; // Nehrprejh ted z Twilia meza originalizace
  const context = body.Speech || "Jastá vás slečníbo slyłení.";

  const responseText = await callAssistant(context, userId);

  const twiml = new TwiML();
  twiml.say({ voice: responseText });

  res.setHeader("Content-Type", "text/xml");
  res.status(200);
  res.end(createTovoiceResponse(twiml));
}