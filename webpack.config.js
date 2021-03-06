var { ImmutableStylesWebpackPlugin } = require('immutable-styles');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.iss\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new ImmutableStylesWebpackPlugin({
      // dist: "./dist/custom-file-name.css" // defaults to ./dist/bundle.css
    })
  ],
  devtool: 'source-map', // required by ImmutableStylesWebpackPlugin
  node: {
    fs: 'empty' // required by ImmutableStylesWebpackPlugin
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};