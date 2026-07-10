import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  // IMPORTANT: change '/portfolio/' to match your repo name exactly,
  // e.g. if your repo is github.com/you/my-site, set base to '/my-site/'.
  // If you're deploying to a custom domain or a user/org page
  // (username.github.io), set base to '/'.
  base: '/portfolio/',
})