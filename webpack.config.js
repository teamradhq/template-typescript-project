const path = require('path');

module.exports = {
  entry: './ts/src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      '@': path.resolve(__dirname, 'ts/src/'),
      '#': path.resolve(__dirname, 'test/')
    }
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'js'),
  },
};
