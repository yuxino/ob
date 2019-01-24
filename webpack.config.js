const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
  mode: 'development',
  entry: './debugger/index.js',
  devtool: 'inline-source-map',
  output: {
      path: __dirname + '/dist',
      filename: 'index_debugger_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
      template: './debugger/index.html'
  })]
}