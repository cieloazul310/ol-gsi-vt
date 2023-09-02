module.exports = {
  extends: "../../.eslintrc.js",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.eslint.json",
  },
  rules: {
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
