module.exports = {
  apps: [
    {
      name: 'telareth:db:docker',
      script: 'docker/up.sh',
      interpreter: 'bash',
      watch: ['docker'],
      broadcast_logs: true,
    },
    {
      name: 'telareth:sdk',
      script: 'src/index.ts',
      watch: ['src'],
      autorestart: true,
      broadcast_logs: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
