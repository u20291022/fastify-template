import {defineConfig} from "tsup";

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";
const isTest = process.env.NODE_ENV === "test";

export default defineConfig({
  entry: ["source/index.ts"],
  outDir: "dist",
  target: "node22",
  minify: isProd,
  sourcemap: isDev || isTest,
  clean: true,
  format: "esm",
  tsconfig: isProd ? "tsconfig.build.json" : "tsconfig.json",
});
