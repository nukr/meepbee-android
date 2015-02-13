var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src-www/js/boot.js',
  ],
  output: {
    path: __dirname + '/www',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      { test: /\.jsx?$/, loaders: ['6to5-loader?experimental&optional=selfContained'], exclude: /node_modules/},
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff'},
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff'},
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.png$/i, loaders: ['url-loader?limit=10000&mimetype=image/png'] },
      { test: /\.gif$/i, loaders: ['url-loader?limit=10000&mimetype=image/gif'] },
      { test: /\.jpe?g$/i, loaders: ['url-loader?limit=10000&mimetype=image/jpg'] }
    ]
  }
};
