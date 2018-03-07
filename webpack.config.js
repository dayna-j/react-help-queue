const webpack = require('webpack');
// require only the resolve method from the path core module
const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    // activates hot module replacement.
		'react-hot-loader/patch',
		// connects to the necessary endpoint (our project will be served at localhost:8080).
    'webpack-dev-server/client?http://localhost:8080',
		// instructs Webpack to bundle code, then provide the bundle to the development server
		'webpack/hot/only-dev-server',
    resolve(__dirname, "src", "index.jsx")
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    // This specifies where hot-reloaded modules should be loaded. / is the default publicPath configuration for single page applications
		publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: '#source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.json"
          }
        },
        {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {"modules": false}],
            "react",
          ],
          plugins: [
            "react-hot-loader/babel"
          ]
        }
      }
    ]
  },
	
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
      template:'template.ejs',
      appMountId: 'react-app-root',
      title: 'React Help Queue',
      filename: resolve(__dirname, "build", "index.html"),
    }),
  ]
};