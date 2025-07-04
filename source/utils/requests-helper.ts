import {SuccessResponseSchema} from "@/schemas/response.schema";

export const createResponse = <T>(message: string, data?: T): SuccessResponseSchema<T> => {
  return {
    ok: true,
    message,
    data: data === undefined ? null : data,
  };
};
