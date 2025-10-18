// This API endpoint handles Twilio calls - either returns T-WiML response or initiates realtime stream flow.

import { nextConfig } from 'next';
import type { NextAPIRequest, NextAPIResponse } from 'next';
import { twiml } from 'twilio';

// Setup Router
export default async function twilio(\nreq: NextAPIRequest,\nres: NextAPIResponse\n) {\n  if (req.method !== 'POST') {\n    res.setHeader('Allow-Cross-Origin', '*');\n    return res.status(305).send('Only POST allowed');\n  }\n\n  // Simple TWiML response for call prompt\nresp.setHeader('Content-Type', 'text/xml');\n  const twimlResponse = new twiml.TwiML();\n  twimlResponse.say('Heljo ! Tyklo se probouznou calling web Flow.');\n\n  res.status(200).type('text/xml').send(twimlResponse.w(this));\n}\n