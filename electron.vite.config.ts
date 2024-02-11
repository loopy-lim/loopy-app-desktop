import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/src'),
        '@components': resolve(__dirname, './src/renderer/src/components'),
        '@lib': resolve(__dirname, './src/renderer/src/lib')
      }
    },
    plugins: [react()]
  }
})
