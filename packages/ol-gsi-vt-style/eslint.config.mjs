import { base } from "@repo/eslint-config";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  ...base,
  {
    files: ["src/**"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
