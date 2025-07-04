import {AllErrors} from "@/enums/error.enum";
import {StatusCode} from "@/enums/status-code.enum";
import {ErrorResponseSchema} from "@/schemas/response.schema";

export class BaseHttpError extends Error {
  constructor(
    public code: AllErrors,
    public details: string | undefined,
    public statusCode = StatusCode.BAD_REQUEST,
  ) {
    super(details);
  }

  public getResponse(): ErrorResponseSchema {
    return {
      ok: false,
      message: "Something went wrong!",
      error: {
        code: this.code,
        details: process.env.NODE_ENV === "production" ? null : this.details,
      },
    };
  }

  public getLog(): string {
    const detailsString = typeof this.details === "string";
    const detailsLog = detailsString ? this.details : JSON.stringify(this.details, null, "\t");
    return `(status: ${this.statusCode}) [${this.code}] ${detailsLog}`;
  }
}
