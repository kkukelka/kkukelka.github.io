import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt([
  {
    files: ["**/*.{js,ts,vue}"],
  },
  // config to disable all ESLint rules that might conflict with Prettier's formatting
  eslintConfigPrettier,
]);
