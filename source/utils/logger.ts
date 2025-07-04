import pino from "pino";

export const getFastifyLoggerOptions = () => {
  const fastifyLogger = getFastifyLogger();
  const fastifyLoggerOptions = {loggerInstance: fastifyLogger};
  return fastifyLoggerOptions;
};

export const getFastifyLogger = () => {
  const isTest = process.env.NODE_ENV === "test";
  if (isTest) return;

  const logger = pino({
    level: "info",
    transport: {
      targets: [
        {
          target: "pino-pretty",
          level: "info",
          options: {
            colorize: true,
            translateTime: "yyyy-mm-dd HH:MM:ss",
            ignore: "pid,hostname",
          },
        },
        {
          target: "pino/file",
          level: "info",
          options: {
            destination: getLogFileName(),
            mkdir: true,
          },
        },
      ],
    },
  });

  return logger;
};

function getLogFileName() {
  const date = new Date().toISOString().split("T")[0];
  return `logs/app-${date}.log`;
}
