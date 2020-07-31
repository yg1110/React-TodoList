const path = require("path");

module.exports = {
  name: "wordRelay-settings",
  // mode: "development",
  mode: "production",
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
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  entry: {
    app: ["./src/index.tsx"]
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  }
};
