import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/whatsapp/",
  // build: {
  //   rollupOptions: {
  //     output: {
  //       entryFileNames: "js/[name]-[hash].js",
  //       chunkFileNames: "js/[name]-[hash].js",
  //       assetFileNames: ({ name }) => {
  //         if (name && name.endsWith(".css")) {
  //           return "css/[name]-[hash][extname]";
  //         }
  //         return "assets/[name]-[hash][extname]";
  //       },
  //     },
  //   },
  // },
});
