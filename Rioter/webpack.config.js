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
      // 読み込む際に拡張子を省略できるようにする
      extensions: ['', '.js', '.tag'],
    },
    plugins: [
      // 指定した変数を他のモジュール内で使用できるようにする
      new webpack.ProvidePlugin({
        riot: 'riot',
      }),
    ],
  },
];
