import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["source/**/*.ts"],
  ignores: ["source/**/*.enum.ts"],
  extends: [js.configs.recommended, tseslint.configs.recommended],
  rules: {
    eqeqeq: ["error", "always"],
    "no-unused-vars": ["warn", {}],
    "no-var": "error",
    "no-await-in-loop": "error",
    "no-irregular-whitespace": "error",
    camelcase: ["error", {properties: "always", ignoreDestructuring: false}],
    "default-case": "error",
    "default-case-last": "error",
    "max-params": ["error", 3],
    "no-eval": "error",
    "no-magic-numbers": ["error", {ignoreArrayIndexes: true}],
    "no-nested-ternary": "error",
    "prefer-arrow-callback": ["error", {allowUnboundThis: false}],
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-empty-object-type": "warn"
  },
});
