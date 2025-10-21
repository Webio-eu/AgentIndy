
// Načítání proměnných z prostředí
export const config = {
  openaiKey: process.env.OPENAI_API_KEY,
  slackToken: process.env.SLACK_API_TOKEN,
  email: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};
