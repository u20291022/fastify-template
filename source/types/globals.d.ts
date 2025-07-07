import {ENVType} from "@/schemas/models/env.model";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ENVType {}
  }
}

export {};
