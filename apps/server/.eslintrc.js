module.exports = {
  ...require('eslint-config-custom/eslint-server.js'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
