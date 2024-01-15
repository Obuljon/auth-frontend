const path = require("path");
const HtmlWebpackPlagin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          { loader: "sass-loader", options: { sourceMap: true } },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlagin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
      watch: true,
    },
    host: "localhost",
    port: 8080,
    open: true,
    liveReload: true,
    compress: true,
    historyApiFallback: true,
  },
};
