import {GlobalError} from "@/enums/error.enum";
import {BaseHttpError} from "./BaseHttpError";

export class NotFoundError extends BaseHttpError {
  constructor(details: string) {
    super(GlobalError.NOT_FOUND_ERROR, details);
  }
}
