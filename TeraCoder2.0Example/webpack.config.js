const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // TypeScriptやJavaScriptの拡張子を指定
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // CSSファイルを処理
        use: ['style-loader', 'css-loader'], // スタイルローダーとCSSローダーを適用
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 9000,
  },
};
``
