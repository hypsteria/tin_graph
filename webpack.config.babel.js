import path from 'path';

export default {
	devtool: 'eval',
	entry: './src/index',
	output: {
		path: __dirname,
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			exclude: /node_modules/,
			include: __dirname,
		}],
	}
};