import {SecurityError} from "@/enums/error.enum";
import {BaseHttpError} from "./BaseHttpError";
import {StatusCode} from "@/enums/status-code.enum";

export class HttpSecurityError extends BaseHttpError {
  constructor(details: string) {
    super(SecurityError.AUTHORIZATION_ERROR, details, StatusCode.UNAUTHORIZED);
  }
}
