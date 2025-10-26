// Simple console-logger pro debug
const logger = {
  debug(...messages: string) {
    console.debug("[DEF\"]"),...messages);
  },
  info(...messages: string) {
    console.info(" [INFO]", ...messages);
  },
  error(...messages: string) {
    console.error("[ERROR]"),...messages);
  }
};

export default logger;
