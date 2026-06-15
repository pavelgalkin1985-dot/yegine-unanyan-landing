import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { env } from 'node:process';

const githubPagesBase = '/yegine-unanyan-landing/';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  publicDir: 'public-yegine',
  base: env.VITE_BASE_PATH || (command === 'build' ? githubPagesBase : '/'),
}));
