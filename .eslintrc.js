module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
};
