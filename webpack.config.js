var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src-www/js/boot.js',
  ],
  output: {
    path: __dirname + '/www/js',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders: [
      { test: /\.css$/, loader: 'css-loader'},
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      { test: /\.jsx?$/, loaders: ['6to5-loader?experimental&optional=selfContained'], exclude: /node_modules/}
    ]
  }
};
