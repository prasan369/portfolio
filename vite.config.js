import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: change '/portfolio/' to match your repo name exactly,
  // e.g. if your repo is github.com/you/my-site, set base to '/my-site/'.
  // If you're deploying to a custom domain or a user/org page
  // (username.github.io), set base to '/'.
  base: '/portfolio/',
})
