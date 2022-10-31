const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const developmentConfig = {
  output: {
    publicPath: "http://localhost:3001/",
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mf_procedure",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./TabScreen": "./src/components/tabScreen/TabScreen.jsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
};

module.exports = merge(commonConfig, developmentConfig);
