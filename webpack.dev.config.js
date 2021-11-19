const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: "./src/mainPages/home.js",
    register: "./src/mainPages/register.js",
    product: "./src/mainPages/product.js",
    login: "./src/mainPages/login.js",
  },
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "dist/",
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 9001,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "home.html",
      chunks: ["home"],
      title: "home",
      template: "src/page-template.hbs",
      description: "home",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "product.html",
      chunks: ["product"],
      title: "product",
      template: "src/page-template.hbs",
      description: "product",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      chunks: ["login"],
      title: "login",
      template: "src/page-template.hbs",
      description: "login",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "register.html",
      chunks: ["register"],
      title: "register",
      template: "src/page-template.hbs",
      description: "register",
      minify: false,
    }),
  ],
};
