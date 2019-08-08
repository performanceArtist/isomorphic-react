const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: {
    main: [
      '@babel/polyfill',
      path.join(__dirname, 'server/src/client/main.tsx')
    ]
  },

  resolve: {
    modules: ['node_modules', 'client'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@redux': path.resolve(__dirname, 'server/src/client/redux'),
      '@components': path.resolve(__dirname, 'server/src/client/components')
    }
  },
  output: {
    path: path.resolve(__dirname, 'server/src/dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader?url=false',
          {
            loader: 'sass-loader',
            options: {
              data: '@import "./globals";',
              includePaths: [path.join(__dirname, 'src')]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};

export default config;
