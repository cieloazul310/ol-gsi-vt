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
  overrides: [
    {
      files: ["__tests__/**/*.test.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
