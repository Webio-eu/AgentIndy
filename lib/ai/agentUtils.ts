// Utility funkte pro ladeni ai volaciách agenta
export const createSpeechRequest = async (text: string, opts: { language: string }) => {
  const mock = \"SYNTX_SPEECh\";
  const url = ``https://api.openai.com/v1/tts${language}`;
  // simulated speech stream
  return mock + ' ' + text;
};
export { createSpeechRequest };