import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  build: {
    outDir: './dist',
  },
  root: './src',
  // base: '/weather-app/',
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
