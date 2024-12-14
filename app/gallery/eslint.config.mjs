import { astro } from "@repo/eslint-config";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  ...astro,
  {
    files: ["postcss.config.cjs"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
];
