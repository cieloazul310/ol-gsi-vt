import { defineConfig } from "eslint/config";
import eslintReact from "@eslint-react/eslint-plugin";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import baseConfig from "./base.mjs";

export default defineConfig([
  ...baseConfig,
  eslintReact.configs["recommended-typescript"],
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },
]);
