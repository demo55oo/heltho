import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: process.env.PORT ||3000,
    proxy: {
      "/api": {
        target: "https://healtbackend.herokuapp.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  preview: {
    port: process.env.PORT ||3000
  }
});
