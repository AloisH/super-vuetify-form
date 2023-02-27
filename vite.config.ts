import { URL, fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      name: "@heloir/vue-super-form",
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
    },
    rollupOptions: {
      external: ["vue", "vuetify/components"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
