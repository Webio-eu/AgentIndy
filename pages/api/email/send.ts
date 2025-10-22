
// API endpoint pro odesílání e-mailů
import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../../lib/email/sender';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { to, subject, html } = req.body;
  await sendEmail(to, subject, html);
  res.status(200).json({ success: true });
}
