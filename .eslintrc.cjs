/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["@cieloazul310/eslint-config-custom"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
};
