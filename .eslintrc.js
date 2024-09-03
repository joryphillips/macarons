/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: [
    'eslint-plugin-react-compiler',
  ],
  rules: {
    'react-compiler/react-compiler': "error",
  },
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
};
