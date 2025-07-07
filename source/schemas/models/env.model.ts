import {z} from "zod/v4";

export const ENV_SCHEMA = z.object({
  NODE_ENV: z.enum(["develop", "test", "production"]),
  JWT_SECRET: z.string(),
  COOKIES_SECRET: z.string(),
  SERVER_PORT: z.coerce.number(),
});

export type ENVType = z.infer<typeof ENV_SCHEMA>;
