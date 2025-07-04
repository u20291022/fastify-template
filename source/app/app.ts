import Fastify, {FastifyServerOptions} from "fastify";
import {ZodTypeProvider} from "fastify-type-provider-zod";
import fastifyZodPlugin from "./plugins/fastify-zod.plugin";
import swaggerPlugin from "./plugins/swagger.plugin";
import globalRoutes from "./routes/globals";
import jwtPlugin from "./plugins/jwt.plugin";
import errorsHandlerPlugin from "./plugins/errors-handler.plugin";

export const buildApp = (fastifyOptions?: FastifyServerOptions) => {
  const fastify = Fastify(fastifyOptions);

  // fastify settings
  fastify.withTypeProvider<ZodTypeProvider>();

  // register external plugins
  fastify.register(fastifyZodPlugin);
  fastify.register(swaggerPlugin);
  fastify.register(errorsHandlerPlugin);
  fastify.register(jwtPlugin);

  // register user plugins

  // hooks

  // routes
  fastify.register(globalRoutes);

  return fastify;
};
