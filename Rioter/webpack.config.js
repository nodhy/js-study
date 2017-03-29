const webpack = require('webpack');
const path = require('path');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'lib'),
      filename: 'bundle.js',
    },
    module: {
      preLoaders: [
        {
          test: /\.tag$/,
          exclude: /node_modules/,
          loader: 'riotjs-loader',
        },
      ],
      loaders: [
        {
          test: /\.js$|\.tag$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.tag'],
    },
    plugins: [
      new webpack.ProvidePlugin({
        riot: 'riot',
      }),
    ],
  },
];
