import {HEALTHCHECK_SCHEMA} from "@/schemas/routes/healthcheck.schema";
import {createResponse} from "@/utils/requests-helper";
import {FastifyPluginAsync} from "fastify";

const healthcheckRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get("/healthcheck", HEALTHCHECK_SCHEMA, async () => createResponse("healthy"));
};

export default healthcheckRoute;
