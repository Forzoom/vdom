const path = require('path');

module.exports = {
	entry: path.resolve('./src/index.js'),
	output: {
		path: path.resolve('./dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
}