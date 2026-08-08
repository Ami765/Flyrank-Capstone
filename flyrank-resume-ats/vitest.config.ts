import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    // Removed setupFiles completely to bypass the Windows loader issue
  },
});
