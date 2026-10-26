import { defineConfig } from "eslint/config";
import { base } from "@repo/eslint-config";

export default defineConfig([
  ...base,
  {
    files: ["src/**"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]);
