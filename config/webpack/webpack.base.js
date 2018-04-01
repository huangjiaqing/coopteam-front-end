const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const resolve = require('path').resolve;

const root = (dir='') => resolve(__dirname, `../../${dir}`);

module.exports = {

  context: resolve(__dirname, '../../'), 

  watchOptions: {
    ignored: /node_modules/,
  },

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
    alias: {
      components: root('app/components'),
      constants: root('app/constants'),
      services: root('app/services'),
      assets: root('app/assets'),
      routes: root('app/routes'),
      store: root('app/store'),
      utils: root('app/utils'),
    },
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
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: ['happypack/loader?id=pic']
      },
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
    }),
    new HappyPack({
      id: 'pic',
      loaders: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]'
          }
        }
      ]
    }),
  ],

};