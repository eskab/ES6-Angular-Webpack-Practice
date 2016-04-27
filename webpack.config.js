var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {

	context: path.resolve('source'),
	
	entry: [
		'./app/app.js'
	],
	
	output: {
		path: path.resolve('dist'),
		publicPath: '/assets',
		filename: 'bundle.js'
	},

	plugins: [
		new ExtractTextPlugin('styles.css')
	],	

	devServer: {
		contentBase: './source/public'
	},

	module: {
		preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint'
            }
        ],
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style', 'css')
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'html'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=10000'
			},
			{
				test: /\.(woff2|woff)$/,
				loader: 'url?limit=100000'
			},
			{
				test: /\.(ttf|eot|svg)$/,
				loader: 'file'
			}
		]
	},

	resolve: {
		extensions: ['', '.css', 'less', '.html', '.js']
	},

	jshint: {
		esversion: 6
	},

	postcss: [ 
		autoprefixer({ browsers: ['last 2 versions'] }) 
	]

};