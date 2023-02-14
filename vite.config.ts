import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import eslintPlugin from 'vite-plugin-eslint'

const tempIp = 'http://192.168.0.110:8081'
// const tempIp = 'http://localhost:8080'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    }),
    vue()
  ],
  server: {
    port: 3005,
    hmr:true,
    // 设置 https 代理
    proxy: {
      '/api': {
        target: tempIp,
        ws: true,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '/')
      }
    }
  },
  base: './'
})
