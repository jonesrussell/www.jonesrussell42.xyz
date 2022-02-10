module.exports = {
	apps: [
		{
			name: 'portfolio',
			script: './build/index.js',
			watch: './build',
			env: {
				PORT: 3100,
				NODE_ENV: 'production',
				MONGODB_URI: 'mongodb://mongodb.jonesrussell42.xyz:27017/portfolio-app'
			}
		}
	]
};
