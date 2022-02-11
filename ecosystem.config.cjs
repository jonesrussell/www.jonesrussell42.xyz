module.exports = {
	apps: [
		{
			name: 'portfolio',
			script: './build/index.js',
			watch: './build',
    			// Delay between restart
			watch_delay: 1000,
			ignore_watch : ["node_modules"],
			env: {
				PORT: 3100,
				NODE_ENV: 'production',
				MONGODB_URI: 'mongodb://mongodb.jonesrussell42.xyz:27017/portfolio-app'
			}
		}
	]
};
