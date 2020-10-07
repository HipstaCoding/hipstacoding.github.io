/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
    resolve: {
      alias: {
        lib: path.resolve(__dirname, "src/lib"),
        components: path.resolve(__dirname, "src/components"),
        templates: path.resolve(__dirname, "src/templates"),
        images: path.resolve(__dirname, "src/images"),
        hooks: path.resolve(__dirname, "src/hooks"),
        assets: path.resolve(__dirname, "src/assets"),
        pages: path.resolve(__dirname, "src/pages"),
      },
    },
    module: {
      rules: [
        {
          test: /snippets/,
          use: loaders.raw(),
        },
      ],
    },
  });

  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /reveal\.js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
