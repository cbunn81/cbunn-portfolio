module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "google",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "prettier", // Prettier must be last
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "import",
    "jest",
    "jsx-a11y",
    "react",
    "react-hooks",
    "prettier",
    "promise",
  ],
  rules: {
    // turn on errors for missing imports
    "import/no-unresolved": "error",
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "error",
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    "require-jsdoc": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
};
