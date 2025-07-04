import {createResponse} from "@/utils/requests-helper";
import {FastifyPluginAsync} from "fastify";

const healthcheckRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get("/healthcheck", async () => createResponse("healthy"));
};

export default healthcheckRoute;
