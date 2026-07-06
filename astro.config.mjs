import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-site.netlify.app',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
