var webpack = require('webpack');

var public = './public';
var jsRoot = './js';
var distJs = 'scripts';
var distCss = 'styles';


module.exports = {
  entry: {
    site: jsRoot + '/site.js'
  },

  resolve: {
    root: __dirname
  },

  output: {
    path: __dirname + '/' + public,
    filename: distJs + '/[name].js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules|public|app\/vendor/,
          /js\/vendor/
        ],
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|public|app\/vendor/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules|public/,
        loader: 'file?context=app&name=[name].css!autoprefixer?browsers=last 3 version!sass'
      }
    ]
  }
};