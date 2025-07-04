import {z} from "zod/v4";

const helperSchema = z.object({
  ok: z.boolean().describe("Is request succeeded"),
  message: z.string().describe("Response message"),
});

export const SUCCESS_RESPONSE_SCHEMA = helperSchema.extend({
  ok: z.literal(true).optional(),
  data: z.any().nullable().default(null).describe("Successfull response data"),
});

export type SuccessResponseSchema<T> = Omit<z.infer<typeof SUCCESS_RESPONSE_SCHEMA>, "data"> & {
  data: T | null;
};

export const ERROR_RESPONSE_SCHEMA = helperSchema.extend({
  ok: z.literal(false).optional(),
  error: z
    .object({
      code: z.string().optional(),
      details: z.string().optional().nullable(),
    })
    .describe("Error details"),
});

export type ErrorResponseSchema = z.infer<typeof ERROR_RESPONSE_SCHEMA>;
