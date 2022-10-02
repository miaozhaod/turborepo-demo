module.exports = {
  ...require('eslint-config-custom/eslint-next.js'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
