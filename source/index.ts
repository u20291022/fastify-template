import "dotenv-flow/config";
import {buildApp} from "./app/app";
import {getFastifyLoggerOptions} from "./utils/logger";

const main = async () => {
  const fastifyLoggerOptions = getFastifyLoggerOptions();
  const fastify = buildApp({...fastifyLoggerOptions});

  try {
    const port = process.env.SERVER_PORT;
    await fastify.listen({host: "0.0.0.0", port});
  } catch (error) {
    fastify.log.error(error);
    const FAILURE_CODE = 1;
    process.exit(FAILURE_CODE);
  }
};

main();
