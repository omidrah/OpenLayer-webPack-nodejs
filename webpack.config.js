const webpack = require('webpack');

// module.exports = {
//   entry: './main.js',
//   output: {
//     path: __dirname,
//     filename: 'bundle.js'
//   },
// };
module.exports = {
  entry: './mapWithPng.js',
  output: {
    path: __dirname,
    filename: 'bundle2.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
};
