const { resolve } = require('path')
const r = url => resolve(__dirname, url)
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
  filename: '[name].wxss'
})

const config = require('../config')

module.exports = {
  devtool: false,
  output: {
    path: config.assetsPath,
    filename: '[name].js'
  },
  resolve: {
    alias: {
      utils: r('../utils/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'latest'
          ]
        }
      },
      {
        test: /\.sass$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('autoprefixer')({
                    browsers: [
                      'last 2 versions'
                    ]
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.mina$/,
        loader: 'wechat-mina-loader',
        options: {
          dist: './mina'
        }
      }
    ]
  },
  plugins: [
    extractSass,
    new CopyWebpackPlugin([
      {
        from : {
          glob: 'pages/**/*.json',
          to: ''
        } 
      }, {
        from: 'static',
        to: 'static'
      }
    ]),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      souceMap: false
    }),
    new ProgressBarPlugin()
  ]
}
