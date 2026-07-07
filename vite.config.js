import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
})

import copyIfamishedThemes from "./vite.copyThemes.js";

export default {
  plugins: [
    copyIfamishedThemes(),
  ],
};
