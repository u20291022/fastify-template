import fp from "fastify-plugin";
import fastifyJwt, {FastifyJwtNamespace} from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import {FastifyReply, FastifyRequest} from "fastify";
import {JWTPayload} from "@/schemas/models/jwt.model";
import {HttpSecurityError} from "@/errors/SecurityError";
import appConfig from "@/utils/app-config";

export default fp((fastify) => {
  fastify.register(fastifyCookie, {
    secret: appConfig.COOKIES_SECRET,
  });

  fastify.register(fastifyJwt, {
    secret: appConfig.JWT_SECRET,
    cookie: {cookieName: "refreshToken", signed: false},
    sign: {expiresIn: "10m"},
  });

  fastify.decorate("authorize", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (error) {
      const errorIsObject = error && typeof error === "object";
      const errorHasErrorCode = errorIsObject && "code" in error;
      const errorHasJWTErrorCode = errorHasErrorCode && `${error.code}`.startsWith("FST_JWT");
      const errorHasMessage = errorIsObject && "message" in error;
      if (errorHasJWTErrorCode && errorHasMessage && typeof error.message === "string") {
        throw new HttpSecurityError(error.message);
      }
    }
  });
});

declare module "fastify" {
  interface FastifyInstance extends FastifyJwtNamespace<{namespace: "security"}> {
    authorize: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: JWTPayload;
  }
}
