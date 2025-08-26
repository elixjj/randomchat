import type { Plugin } from 'vite';

export function restartEnvFileChange(): Plugin {
  return {
    name: 'restart-env-file-change',
    configureServer(server) {
      // Plugin for restarting on .env file changes - placeholder implementation
    },
  };
}