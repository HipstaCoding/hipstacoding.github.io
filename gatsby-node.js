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
const nodeHtmlToImage = require("node-html-to-image");

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("markdown", markdown);

const CSS_PATTERN = /\.css$/;
const MODULE_CSS_PATTERN = /\.module\.css$/;
const SNIPPETS_FOLDER_PATTERN = /snippets/;

// Thank you guys who wrote gatsby-plugin-postcss, now I know how to find css rules
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-postcss/src/gatsby-node.js
const isCssRules = rule =>
  rule.test &&
  (rule.test.toString() === CSS_PATTERN.toString() ||
    rule.test.toString() === MODULE_CSS_PATTERN.toString());

const findCssRules = config =>
  config.module.rules.find(
    rule => Array.isArray(rule.oneOf) && rule.oneOf.every(isCssRules)
  );

exports.onCreateWebpackConfig = ({ actions, stage, loaders, getConfig }) => {
  const config = getConfig();
  const cssRules = findCssRules(config);

  // should be faster then default "source-map"
  config.devtool = "eval-source-map";
  // adding some aliases to reduce path to files
  config.resolve.alias = Object.assign(config.resolve.alias, {
    lib: path.resolve(__dirname, "src/lib"),
    components: path.resolve(__dirname, "src/components"),
    templates: path.resolve(__dirname, "src/templates"),
    images: path.resolve(__dirname, "src/images"),
    hooks: path.resolve(__dirname, "src/hooks"),
    assets: path.resolve(__dirname, "src/assets"),
    pages: path.resolve(__dirname, "src/pages"),
    features: path.resolve(__dirname, "src/features"),
  });

  config.module.rules.push({
    // I want to use .html and .css files in snippets folder as examples
    test: SNIPPETS_FOLDER_PATTERN,
    use: loaders.raw(),
  });

  if (cssRules) {
    // So because I want to read css files with raw loader, I need exclude snippets folder
    cssRules.oneOf.forEach(rule => {
      rule.exclude = SNIPPETS_FOLDER_PATTERN;
    });
  }

  if (stage === "build-html") {
    config.module.rules.push({
      test: /reveal\.js/,
      use: loaders.null(),
    });
  }

  actions.replaceWebpackConfig(config);
};

if (process.env.BACKGROUN_IMAGE_GENERATION) {
  exports.onCreatePage = async ({ page }) => {
    if (page.path.includes("/lessons/")) {
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
        const highlightedCode =
          hljs.highlight("markdown", trimCode).value + "\n";
        const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>any</title>
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
}
