import {RouteShorthandOptions} from "fastify";
import {SUCCESS_RESPONSE_SCHEMA} from "../response.schema";

export const HEALTHCHECK_SCHEMA: RouteShorthandOptions = {
  schema: {
    response: {
      200: SUCCESS_RESPONSE_SCHEMA,
    },
  },
};
