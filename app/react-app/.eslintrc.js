module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
};
