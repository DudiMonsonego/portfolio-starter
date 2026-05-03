import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ensure `yarn preview` serves index.html for client routes (fixes 404 preview on /cv/:id refreshes).
const spaFallbackPreview = {
  name: 'spa-fallback-preview',
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      if ((req.method !== 'GET' && req.method !== 'HEAD') || !req.url) {
        return next()
      }
      const pathOnly = req.url.split('?')[0]
      if (pathOnly.includes('.') && !pathOnly.endsWith('.html')) {
        return next()
      }
      const accept = req.headers.accept ?? ''
      if (!accept.includes('text/html')) {
        return next()
      }
      if (
        pathOnly.startsWith('/@') ||
        pathOnly.startsWith('/node_modules')
      ) {
        return next()
      }
      if (pathOnly.endsWith('.html')) {
        return next()
      }
      req.url = req.url.includes('?') ? `/index.html?${req.url.split('?')[1]}` : '/index.html'
      next()
    })
  },
}

export default defineConfig(({ mode }) => ({
  define: {
    // Allows checking `process.env.NODE_ENV` in browser code as requested.
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  plugins: [react(), spaFallbackPreview],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
}))

