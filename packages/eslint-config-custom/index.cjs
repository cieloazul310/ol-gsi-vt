/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
};
