import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

// Plugin to serve static HTML pages from public directory
// This prevents Vite's SPA fallback from catching /tools/ routes
function staticHtmlPlugin(): Plugin {
  const staticPaths = ['/tools/', '/tools/markdown-editor/', '/tools/dss-viewer/', '/tools/jwt-editor/']

  return {
    name: 'static-html-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || ''

        // Check if this is a static path we should handle
        for (const staticPath of staticPaths) {
          if (url === staticPath || url === staticPath.slice(0, -1)) {
            const htmlPath = path.join(__dirname, 'public', staticPath, 'index.html')
            if (fs.existsSync(htmlPath)) {
              res.setHeader('Content-Type', 'text/html')
              fs.createReadStream(htmlPath).pipe(res)
              return
            }
          }
        }

        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [staticHtmlPlugin(), react(), tailwindcss()],
  build: {
    outDir: '../../docs',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: 'public',
})
