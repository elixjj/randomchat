import type { Plugin } from 'vite';

export default function consoleToParent(): Plugin {
  return {
    name: 'console-to-parent',
    configureServer(server) {
      // Plugin for console communication - placeholder implementation
    },
  };
}