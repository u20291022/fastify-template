import "dotenv-flow/config";
import {buildApp} from "./app/app";
import {getFastifyLoggerOptions} from "./utils/logger";
import { ENV_SCHEMA } from "./schemas/models/env.model";

const main = async () => {
  const FAILURE_CODE = 1;

  try {
    ENV_SCHEMA.parse(process.env);
  }
  catch (error) {
    console.error(error);
    process.exit(FAILURE_CODE);
  }

  const fastifyLoggerOptions = getFastifyLoggerOptions();
  const fastify = buildApp({...fastifyLoggerOptions});

  try {
    const port = process.env.SERVER_PORT;
    await fastify.listen({host: "0.0.0.0", port});
  } catch (error) {
    fastify.log.error(error);
    process.exit(FAILURE_CODE);
  }
};

main();
