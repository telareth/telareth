module.exports = {
  apps: [
    {
      name: 'telareth:db:docker',
      script: 'dotenvx',
      args: ['run', '-f', '.env', '--', './docker/up.sh'],
      watch: ['docker', '.env'],
      broadcast_logs: true,
    },
    {
      name: 'telareth:sdk',
      script: 'src/index.ts',
      watch: ['src', '.env'],
      autorestart: true,
      broadcast_logs: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
