import {GlobalError} from "@/enums/error.enum";
import {BaseHttpError} from "./BaseHttpError";
import {StatusCode} from "@/enums/status-code.enum";

export class ValidationError extends BaseHttpError {
  constructor(details: string = "Feilds validation error") {
    super(GlobalError.VALIDATION_ERROR, details, StatusCode.BAD_REQUEST);
  }
}
