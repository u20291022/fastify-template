import {HEALTHCHECK_SCHEMA} from "@/schemas/routes/healthcheck.schema";
import {FastifyPluginAsync} from "fastify";
import {handleHealtcheckGet} from "./healtcheck.handler";

const healthcheckRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get("/healthcheck", HEALTHCHECK_SCHEMA, handleHealtcheckGet(fastify));
};

export default healthcheckRoute;
