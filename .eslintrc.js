module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "prettier",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    semi: ["warn", "always"],
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "off",
    "react/jsx-no-comment-textnodes": "off",
    "react/react-in-jsx-scope": "off",
  },
};
