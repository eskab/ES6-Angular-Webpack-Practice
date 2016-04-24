var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	context: path.resolve('source'),
	
	entry: [
		'./app/app.js'
	],
	
	output: {
		path: root('dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},

	plugins: [
		new ExtractTextPlugin('styles.css')
	],	

	devServer: {
		contentBase: './source/public'
	},

	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
				// loader: 'style-loader!css-loader'
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
				// loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'html-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(woff2|woff)$/,
				loader: 'url-loader'
			},
			{
				test: /\.(ttf|eot|svg)$/,
				loader: 'file-loader'
			}
		]
	},

	resolve: {
		extensions: ['', '.css', 'less', '.html', '.js']
	}

};

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}