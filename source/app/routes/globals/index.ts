import {FastifyPluginAsync} from "fastify";
import fastifySwaggerUi from "@fastify/swagger-ui";
import healthcheckRoute from "./healthcheck";
import appConfig from "@/utils/app-config";

const globalRoutes: FastifyPluginAsync = async (fastify) => {
  const isDevelopment = appConfig.NODE_ENV === "develop";

  if (isDevelopment) {
    fastify.register(fastifySwaggerUi, {
      routePrefix: "/documentation",
      indexPrefix: ".",
    });
  }

  fastify.register(healthcheckRoute);
};

export default globalRoutes;
