module.exports = {
  extends: [
    "react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
  },
};
