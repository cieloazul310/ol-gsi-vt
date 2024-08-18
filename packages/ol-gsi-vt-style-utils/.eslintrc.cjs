module.exports = {
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
