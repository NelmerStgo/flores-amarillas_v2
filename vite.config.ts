import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(
  ({ command }) => ({
    plugins: [
      react(),
    ],

    /*
     * En desarrollo:
     * http://localhost:5173/
     *
     * En producción / GitHub Pages:
     * /flores-amarillas_v2/
     */
    base:
      command === "build"
        ? "/flores-amarillas_v2/"
        : "/",
  }),
);