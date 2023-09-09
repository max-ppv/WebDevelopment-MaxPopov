import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  resolve: {
    alias: {
      utils: '/src/utils',
      types: '/src/types',
      service: '/src/service'
    }
  },
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
};

export default config;
