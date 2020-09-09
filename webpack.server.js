const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  //Inform the webpack that we are building the bundle for
  //nodeJs rather for the browser.
  target: "node",
  //Tell webpack the root file of our server application
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
