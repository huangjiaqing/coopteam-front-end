const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const resolve = require('path').resolve;

const root = (dir='') => resolve(__dirname, `../../${dir}`);

module.exports = {

  context: resolve(__dirname, '../../'), 

  entry: {
    app: [
      'normalize.css',
      './app/utils/customize.css',
      './app/app.js'
    ]
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [root('app'), root('test')],
        use: ['happypack/loader?id=babel']
      },
      {
        test: /\.css$/,
        include: [
          root('app'),
          root('node_modules/normalize.css')
        ],
        use: ['happypack/loader?id=css'],
      },
      {
        test: /\.css$/,
        use: ['happypack/loader?id=antd'],
        // 不要对antd使用css模块化
        include: [root('/node_modules/antd'),]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../template/index.html'),
      inject: true
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory']
    }),
    new HappyPack({
      id: 'css',
      loaders: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            namedExport: true,
            sourceMap: true,
            importLoaders: 1,
            module: true,
            camelCase: true,
            localIdentName: '[name]__[local]-[hash:base64:5]',
            less: true
          }
        },
        'postcss-loader'
      ]
    }),
    new HappyPack({
      id: 'antd',
      loaders: ['style-loader', 'postcss-loader']
    })
  ],

  watchOptions: {
    ignored: /node_modules/,
  }

};