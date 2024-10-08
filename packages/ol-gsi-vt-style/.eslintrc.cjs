/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: "../../.eslintrc.cjs",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.eslint.json",
  },
  rules: {
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
