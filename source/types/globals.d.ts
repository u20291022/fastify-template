declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "develop" | "test" | "production";
      POSTGRES_DB: string;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_PORT: number;
      JWT_SECRET: string;
      COOKIES_SECRET: string;
      SERVER_PORT: number;
    }
  }
}

export {};
