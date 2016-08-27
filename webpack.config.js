var webpack = require('webpack');


module.exports = {
  cache: true,
  entry: {
    main:  './public/scripts/main.js',
  },
  output: {
    path: 'public/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'] 
  },
  plugins:[
new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})  ]

};