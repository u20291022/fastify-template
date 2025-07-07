import {createResponse} from "@/utils/requests-helper";
import {FastifyInstance, RouteHandlerMethod} from "fastify";

export const handleHealtcheckGet =
  (fastify: FastifyInstance): RouteHandlerMethod =>
  async (request, reply) => {
    return createResponse("healthy");
  };
