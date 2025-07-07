import {handleHealthcheckGet} from "@/app/routes/globals/healthcheck/healthcheck.handler";
import {FastifyInstance} from "fastify";

describe("Healthcheck handler unit", () => {
  it("returns success response", async () => {
    const fastify = {} as FastifyInstance;
    const request: any = {};
    const reply: any = {};

    const handler = handleHealthcheckGet(fastify);
    const result = await handler.call(fastify, request, reply);

    expect(result).toEqual({
      ok: true,
      message: "healthy",
      data: null,
    });
  });
});
