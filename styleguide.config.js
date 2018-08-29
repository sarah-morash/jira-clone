const path = require("path");

module.exports = {
  webpackConfig: require("./webpack.dev.js"),
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json"
  ).parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, "styleguide/Wrapper.tsx")
  }
};
