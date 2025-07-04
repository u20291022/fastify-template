import {GlobalError} from "@/enums/error.enum";
import {BaseHttpError} from "./BaseHttpError";
import {StatusCode} from "@/enums/status-code.enum";

export class InternalServerError extends BaseHttpError {
  constructor(details: string = "Unknown error") {
    super(GlobalError.INTERNAL_SERVER_ERROR, details, StatusCode.INTERNAL_SERVER_ERROR);
  }
}
