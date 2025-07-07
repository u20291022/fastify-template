import {buildApp} from "@/app/app";
import {FastifyInstance} from "fastify";
import request from "supertest";

describe("Healthcheck end to end", () => {
  let fastify: FastifyInstance;

  beforeAll(async () => {
    fastify = buildApp();
    await fastify.ready();
  });

  afterAll(async () => {
    await fastify.close();
  });

  it("should return healthy response", async () => {
    const response = await request(fastify.server).get("/healthcheck");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      ok: true,
      message: "healthy",
      data: null,
    });
  });
});
