import eslintConfigPrettier from "eslint-config-prettier";
import baseConfig from "./base.mjs";
import astroConfig from "./astro.mjs";
import reactConfig from "./react.mjs";

export const base = [...baseConfig, eslintConfigPrettier];
export const astro = [...astroConfig, eslintConfigPrettier];
export const react = [...reactConfig, eslintConfigPrettier];

export default {
  configs: {
    base,
    astro,
    react,
  },
};
