import type { Plugin } from 'vite';

export function loadFontsFromTailwindSource(): Plugin {
  return {
    name: 'load-fonts-from-tailwind-source',
    configResolved(config) {
      // Plugin for loading fonts from Tailwind - placeholder implementation
    },
  };
}