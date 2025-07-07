import {fastifyHelmet} from "@fastify/helmet";
import fp from "fastify-plugin";

export default fp(async (fastify) => {
  fastify.register(fastifyHelmet, {
    contentSecurityPolicy: false,
    frameguard: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false,
    dnsPrefetchControl: false,
    ieNoOpen: false,
  });
});
