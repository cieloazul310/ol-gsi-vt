import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import eslintPluginAstro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import typescriptEslintParser from "@typescript-eslint/parser";
import baseConfig from "./base.mjs";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  {
    plugins: {
      "jsx-a11y": jsxA11yPlugin,
    },
  },
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
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
];
