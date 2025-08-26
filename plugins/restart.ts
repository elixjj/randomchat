import type { Plugin } from 'vite';

interface RestartOptions {
  restart?: string[];
}

export function restart(options: RestartOptions = {}): Plugin {
  return {
    name: 'restart',
    configureServer(server) {
      // Plugin for restarting on file changes - placeholder implementation
      if (options.restart) {
        // Watch for file changes and restart server
      }
    },
  };
}