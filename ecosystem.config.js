module.exports = {
  apps: [
    {
      name: 'portfolio-svelte',
      script: './build/index.js',
      watch: false,
      force: true,
      env: {
        PORT: 4500,
        NODE_ENV: 'production',
      },
    },
  ],
};

