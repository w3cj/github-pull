module.exports = {
  apps : [{
    name: 'github-pull',
    script: 'index.js',
    instances: 1,
    autorestart: true,
    watch: false
  }]
};
