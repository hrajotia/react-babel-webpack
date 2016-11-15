"use strict";
var path = require("path")
var webpack = require("webpack")

const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env.PORT || "8888"

module.exports = {
  entry: "./public/js/app.js",
  output: {
    path: path.join(__dirname, "public", "js"),
    publicPath: "/js/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-class-properties"]
        }
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    // hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      },
      mangle: {
        except: [],
        keep_fnames: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
}
