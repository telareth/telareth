export default {
  apps: [
    {
      name: 'telareth:db:docker',
      interpreter: 'bash',
      script: 'docker',
      args: ['compose', '-f docker/docker-compose.yml', 'up'],
      instances: 'max',
      exec_mode: 'cluster',
    },
    {
      name: 'telareth:sdk',
      script: 'src/index.ts',
      instances: 'max',
      exec_mode: 'cluster',
      watch: ['src'],
      autorestart: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
