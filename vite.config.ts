import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),

    VitePWA({
      manifest: {
        name: 'GTA MAP',
        short_name: 'GTA MAP',
        description: 'GTA style map',
        theme_color: '#000000',
        icons: [
          {
            src: '/images/favicon-pwa.ico',
            sizes: '1000*1000',
            type: 'image/png',
          },
        ],
      },
      registerType: 'autoUpdate',
      workbox: {
        /** 缓存相关静态资源 */
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    minify: true,
  },
  server: {
    hmr: true,
    host: '0.0.0.0',
    port: 8080,
  },
})
