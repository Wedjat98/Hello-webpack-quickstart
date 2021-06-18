const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
