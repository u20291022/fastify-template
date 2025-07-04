import {GlobalError} from "@/enums/error.enum";
import {BaseHttpError} from "./BaseHttpError";
import {StatusCode} from "@/enums/status-code.enum";

export class BadRequestError extends BaseHttpError {
  constructor(details: string = "Bad request") {
    super(GlobalError.BAD_REQUEST_ERROR, details, StatusCode.BAD_REQUEST);
  }
}
