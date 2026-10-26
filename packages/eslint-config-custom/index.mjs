import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import baseConfig from "./base.mjs";
import astroConfig from "./astro.mjs";
import reactConfig from "./react.mjs";

export const base = defineConfig([...baseConfig, eslintConfigPrettier]);
export const astro = defineConfig([...astroConfig, eslintConfigPrettier]);
export const react = defineConfig([...reactConfig, eslintConfigPrettier]);

export default {
  configs: {
    base,
    astro,
    react,
  },
};
