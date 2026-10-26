import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import * as astroParser from "astro-eslint-parser";
import typescriptEslintParser from "@typescript-eslint/parser";
import baseConfig from "./base.mjs";

export default defineConfig([
  ...baseConfig,
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: typescriptEslintParser,
        extraFileExtensions: [".astro"],
      },
    },
  },
]);
