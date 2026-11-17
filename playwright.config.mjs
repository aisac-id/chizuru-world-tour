import { defineConfig } from '@playwright/test';

const HOST = process.env.PLAYWRIGHT_HOST || '127.0.0.1';
const PORT = process.env.PLAYWRIGHT_PORT || '8173';
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL || `http://${HOST}:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  fullyParallel: true,
  use: {
    baseURL: BASE_URL,
    headless: true
  },
  webServer: {
    command: 'node scripts/static-server.mjs',
    url: BASE_URL,
    reuseExistingServer: false
  },
  reporter: process.env.CI ? 'line' : 'list'
});
