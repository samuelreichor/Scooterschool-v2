import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@templates': path.resolve('./templates'),
      '@assets': path.resolve('./assets'),
    },
  },
  plugins: [vue()],
  
})
