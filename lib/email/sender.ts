
// Odeslání emailu s pomocí MailDev
import nodemailer from 'nodemailer';

export async function sendEmail(to: string, subject: string, html: string) {
  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    secure: false,
  });

  await transporter.sendMail({
    from: 'no-reply@crm.local',
    to,
    subject,
    html,
  });
}
