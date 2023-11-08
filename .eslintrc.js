module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser",
    },
  ],
  extends: ["plugin:tailwindcss/recommended", "next/core-web-vitals", ],
};
