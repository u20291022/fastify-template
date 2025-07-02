import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: [["src/**/*.{ts,mts}", "tests/**/*.{ts,mts}"]],
    plugins: {js},
    extends: ["js/recommended"],
    rules: {
      eqeqeq: ["error", "always"],
      "no-unused-vars": "warn",
      "no-var": "error",
      "no-await-in-loop": "error",
      "no-irregular-whitespace": "error",
      camelcase: ["error", {properties: "always", ignoreDestructuring: false}],
      "default-case": "error",
      "default-case-last": "error",
      "max-params": ["error", 3],
      "no-eval": "error",
      "no-magic-numbers": "error",
      "no-nested-ternary": "error",
      "prefer-arrow-callback": ["error", {allowUnboundThis: false}],
      "prefer-const": "error",
      "prefer-rest-params": "error",
      "require-await": "error",
    },
  },
  {files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: {globals: globals.browser}},
  tseslint.configs.recommended,
]);
