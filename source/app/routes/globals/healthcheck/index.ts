import {HEALTHCHECK_SCHEMA} from "@/schemas/routes/healthcheck.schema";
import {FastifyPluginAsync} from "fastify";
import {handleHealthcheckGet} from "./healthcheck.handler";

const healthcheckRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get("/healthcheck", HEALTHCHECK_SCHEMA, handleHealthcheckGet(fastify));
};

export default healthcheckRoute;
