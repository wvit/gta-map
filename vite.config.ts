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
        theme_color: '#ffffff',
        icons: [
          {
            src: '/images/favicon.ico',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/favicon.ico',
            sizes: '100*100',
            type: 'image/png',
          },
        ],
      },
      registerType: 'autoUpdate',
      workbox: {
        /** 缓存相关静态资源 */
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            handler: 'CacheFirst',
            urlPattern: /^http:\/\/api.map.baidu.com*/,
            method: 'GET',
            options: {
              cacheName: 'baidu-map', //创建缓存名称
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
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
