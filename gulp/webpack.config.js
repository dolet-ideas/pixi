
const config = {
  entry: "./src/js/common.js",
  output: {
    filename: "common.js",
    path: "/build/js/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  }
};

module.exports = config;
