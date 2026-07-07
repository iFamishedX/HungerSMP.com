import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import copyIfamishedThemes from "./vite.copyThemes.js";

export default defineConfig({
  plugins: [
    react(),
    cloudflare(),
    copyIfamishedThemes(),
  ],
});
