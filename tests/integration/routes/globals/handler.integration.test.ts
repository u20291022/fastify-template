import {buildApp} from "@/app/app";
import {FastifyInstance} from "fastify";

describe("Healthcheck integration", () => {
  let fastify: FastifyInstance;

  beforeAll(async () => {
    fastify = buildApp();
    await fastify.ready();
  });

  afterAll(async () => {
    await fastify.close();
  });

  it("should return healthy response", async () => {
    const response = await fastify.inject({
      method: "GET",
      url: "/healthcheck",
    });
    const data = await response.json();

    expect(data).toEqual({
      ok: true,
      message: "healthy",
      data: null,
    });
  });
});
