import { defineConfig } from "oxfmt";

const config = defineConfig({
  ignorePatterns: ["pnpm-workspace.yaml", "/content", "/docs", "/public"],
  sortPackageJson: {
    sortScripts: true,
  },
});

export default config;
