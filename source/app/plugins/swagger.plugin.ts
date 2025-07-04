import fp from "fastify-plugin";
import fastifySwagger from "@fastify/swagger";
import {jsonSchemaTransform, jsonSchemaTransformObject} from "fastify-type-provider-zod";

export default fp((fastify) => {
  const isDevelopment = process.env.NODE_ENV === "develop";
  if (!isDevelopment) return;

  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Users API",
        version: "1.0.0",
      },
      servers: [
        {description: "Development server", url: `http://127.0.0.1:${process.env.SERVER_PORT}`},
      ],
    },
    transform: jsonSchemaTransform,
    transformObject: jsonSchemaTransformObject,
  });

  // swagger ui located in version index route (routes/v1 for example)
});
