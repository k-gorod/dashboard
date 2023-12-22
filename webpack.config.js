const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      {
        test: /\.(sass|less|css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port:
      ((asd) => {
        console.log(asd);
        return asd;
      })(process.env.APP_PORT) || 3333,
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    historyApiFallback: true,
    open: true,
  },

  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
};
