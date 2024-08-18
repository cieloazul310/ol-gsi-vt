/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:astro/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "warn",
      },
    },
    {
      files: ["astro.config.ts", "panda.config.ts", "postcss.config.cjs"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["postcss.config.cjs"],
      rules: {
        "global-require": false,
      },
    },
    {
      files: ["src/components/scripts/**/*"],
      rules: {
        "@typescript-eslint/naming-convention": "warn",
      },
    },
    {
      files: ["src/content/config.ts"],
      rules: {
        "import/prefer-default-export": "off",
      },
    },
  ],
};
