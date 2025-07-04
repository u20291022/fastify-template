import {BaseHttpError} from "@/errors/BaseHttpError";
import fp from "fastify-plugin";
import {ZodError} from "zod/v4";
import {StatusCode} from "@/enums/status-code.enum";
import {ValidationError} from "@/errors/ValidationError";
import {NotFoundError} from "@/errors/NotFoundError";
import {BadRequestError} from "@/errors/BadRequestError";
import {InternalServerError} from "@/errors/InternalServerError";

export default fp((fastify) => {
  fastify.setNotFoundHandler((request, reply) => {
    const notFoundError = new NotFoundError(
      `Resource "${request.protocol}://${request.host}${request.url}" not found`,
    );
    return reply.status(notFoundError.statusCode).send(notFoundError.getResponse());
  });

  fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error);

    if (error instanceof BaseHttpError) {
      return reply.status(error.statusCode).send(error.getResponse());
    }

    if (error instanceof ZodError) {
      const validationError = new ValidationError(error.issues);
      return validationError;
    }

    if (error.validation) {
      const validationError = new ValidationError(error.message);
      return reply.status(validationError.statusCode).send(validationError.getResponse());
    }

    if (error.statusCode === StatusCode.BAD_REQUEST) {
      const badRequestError = new BadRequestError(error.message);
      return reply.status(badRequestError.statusCode).send(badRequestError.getResponse());
    }

    const internalServerError = new InternalServerError(error);
    return reply.status(internalServerError.statusCode).send(internalServerError.getResponse());
  });
});
