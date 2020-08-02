const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "wordRelay-settings",
  mode: "development",
  devtool: "eval",

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel"
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    })
  ],

  entry: {
    app: ["./src/index.tsx"]
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  }
};
