const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    portfolioBox: './src/portfolioBox.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts',
  },
};
