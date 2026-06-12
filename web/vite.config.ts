/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import path from "path";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  base: "/scs-modlists/",
  build: {
    target: "es2020",
  },
  plugins: [react(), wasm(), topLevelAwait()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  worker: {
    format: "es",
    plugins: () => [wasm()],
  },
  test: {
    setupFiles: [
      "tests/vitest-setup-dom.ts",
      "tests/vitest-cleanup-after-each.ts",
    ],
    environment: "happy-dom",
    browser: {
      provider: "playwright",
      enabled: true,
      headless: true,
      instances: [{ browser: "firefox" }],
    },
  },
});
