import type {Config} from "jest";
import {pathsToModuleNameMapper} from "ts-jest";

import {readFileSync} from "fs";
const compilerOptions = JSON.parse(readFileSync("./tsconfig.json", "utf-8")).compilerOptions;

const config: Config = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", {tsconfig: "tsconfig.json"}],
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: "<rootDir>/"}),
  modulePaths: [compilerOptions.baseUrl],
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  collectCoverage: true,
  coverageReporters: ["html"],
  coverageDirectory: "coverage",
};

export default config;
