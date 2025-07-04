import z from "zod/v4";

export const JWT_PAYLOAD_SCHEMA = z.object({
  id: z.number(),
});

export type JWTPayload = z.infer<typeof JWT_PAYLOAD_SCHEMA>;

export const JWT_TOKEN_SCHEMA = z.string().describe("JWT token");

export type JWTToken = z.infer<typeof JWT_TOKEN_SCHEMA>;
