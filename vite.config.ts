import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'process.env.API_BASE_URL': JSON.stringify(env.API_BASE_URL),
      'process.env.API_STATIC_URL': JSON.stringify(env.API_STATIC_URL),
    },
    plugins: [react()],
  }
})
