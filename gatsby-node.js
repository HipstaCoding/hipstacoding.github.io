/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const fs = require("fs");
const hljs = require("highlight.js/lib/core");
const markdown = require("highlight.js/lib/languages/markdown");
const xml = require("highlight.js/lib/languages/xml");
const css = require("highlight.js/lib/languages/css");

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("markdown", markdown);

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
        features: path.resolve(__dirname, "src/features"),
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

exports.onCreatePage = async ({ page, actions }) => {
  if (page.path.includes("/lessons/")) {
    const nodeHtmlToImage = require("node-html-to-image");
    const imgPath = path.join(
      __dirname,
      "src/pages",
      page.path,
      "images/background.jpg"
    );

    try {
      const styles = fs.readFileSync(
        "./src/lib/reveal-theme/atom-one-dark.css",
        "utf8"
      );
      const sourceCode = fs.readFileSync(page.componentPath, "utf8");

      const trimCode = sourceCode.split("\n").slice(0, 50).join("\n");
      const highlightedCode = hljs.highlight("markdown", trimCode).value + "\n";

      const html = `
<html>
  <head>
    <style>
      body {
        width: 1920px;
        height: 1080px;
        font-size: 24px;
      }
    ${styles}
    </style>
  </head>
  <body>
    <pre class="hljs"><code>${highlightedCode}</code></pre>
  </body>
</html>`;

      await nodeHtmlToImage({
        output: imgPath,
        html,
      });
      console.log("Background Image Creation Success!", imgPath);
    } catch (err) {
      console.log("Background Image Creation Error!", err);
    }
  }
};
