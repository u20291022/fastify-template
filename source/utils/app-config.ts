import "dotenv-flow/config";
import {ENV_SCHEMA} from "@/schemas/models/env.model";

const {success, data, error} = ENV_SCHEMA.safeParse(process.env);

if (!success) {
  throw error;
}

export default data!;
