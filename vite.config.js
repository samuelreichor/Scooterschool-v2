import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve('./src/_components/'),
    },
  },
  plugins: [vue(), svgLoader()],
  
})
