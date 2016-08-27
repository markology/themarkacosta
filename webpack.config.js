var webpack = require('webpack');

    var definePlugin =  new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }});
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
})  ,
definePlugin]

};