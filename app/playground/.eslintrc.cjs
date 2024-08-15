/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: [".eslintrc.cjs", "vite.config.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["src/**/*"],
      rules: {
        "import/extensions": "warn",
      },
    },
    {
      files: ["src/components/ui/**/*"],
      rules: {
        "import/prefer-default-export": "off",
      },
    },
  ],
};
