module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: '../../.eslintrc.js',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
};
