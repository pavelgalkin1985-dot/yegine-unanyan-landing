import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.js';

export default mergeConfig(viteConfig({ command: 'serve', mode: 'development' }), defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
}));
