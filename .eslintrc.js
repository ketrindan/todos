module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  rules: {
  },
  ignorePatterns: [".eslintrc.js", "node_modules", "lib", "dir"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        "alwaysTryTypes": true
      }
    },
  },
};
