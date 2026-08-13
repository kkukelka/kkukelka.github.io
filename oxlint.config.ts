import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: ["content/**", "docs/**", "public/**"],
  plugins: ["import", "node", "typescript", "vue", "oxc"],
});
