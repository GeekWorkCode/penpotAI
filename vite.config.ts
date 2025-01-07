import { defineConfig } from "vite";
import livePreview from "vite-live-preview";

export default defineConfig({
  plugins: [
    livePreview({
      reload: true,
    }),
  ],
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 4400,      // 指定端口
  },
  preview: {
    host: '0.0.0.0', // preview 模式也允许外部访问
    port: 4400,
  },
  build: {
    rollupOptions: {
      input: {
        plugin: "src/plugin.ts",
        index: "./index.html",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
