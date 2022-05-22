const path = require("path")

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components"),
        constants: path.resolve(__dirname, "src/constants"),
        pages: path.resolve(__dirname, "src/pages"),
      },
    },
  })
}
