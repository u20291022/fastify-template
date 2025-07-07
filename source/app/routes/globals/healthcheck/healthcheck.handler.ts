import {createResponse} from "@/utils/requests-helper";
import {FastifyInstance, RouteHandlerMethod} from "fastify";

export const handleHealthcheckGet =
  (fastify: FastifyInstance): RouteHandlerMethod =>
  async (request, reply) => {
    return createResponse("healthy");
  };
