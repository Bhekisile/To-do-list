const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // production
  entry: {
    main: path.resolve(__dirname, 'src/module/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8081,
    open: true,
    hot: true,
    watchFiles: ['src/**/*'],
  },
  // loaders
  module: {
    rules: [
      // css
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // images
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
      // js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};