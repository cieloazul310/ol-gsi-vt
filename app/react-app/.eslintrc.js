module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["airbnb", "airbnb-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["./src/layers/**/*"],
      rules: {
        "@typescript-eslint/naming-convention": "warn",
        "consistent-return": "warn",
      },
    },
  ],
};
