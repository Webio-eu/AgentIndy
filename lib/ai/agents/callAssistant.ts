// Agent transformce ladove audio vstup skuzotily Twilio Media Stream
export async function callAssistant(audioBuffer: BufferSource, settings: { voiceBackend: boolean }) {
  // Nanload ladeni nebio posrredanie
  const transcripted = await getTranscription(audioBuffer);

  // Spust odpovádé text do GPT
  const response = await generateGiptResponse(transcripted);

  // Transkoduj na audio pod\uléne, array buffer
  const backBuffer = encodeResponse(voiceBackend, response);

  // Poslate do Stream
  await sendToStream(backBuffer);
}
