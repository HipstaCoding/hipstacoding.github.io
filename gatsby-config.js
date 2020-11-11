const path = require("path");
const title = "Hipsta Coding School";
const description =
  "Hipsta Coding School - прогрессивные курсы креативного программирования. КУРС FRONT-END (HTML5+CSS3, JAVASCRIPT, REACT) РАЗРАБОТКИ С НУЛЯ.";

module.exports = {
  siteMetadata: {
    title,
    siteUrl: "https://hipstacoding.school/",
    description,
    image: "https://hipstacoding.school/hipsta-logo.jpg",
    keywords: [
      "courses",
      "курсы",
      "front end",
      "frontend",
      "front-end",
      "программирование",
      "it",
      "с нуля",
      "школа программирования",
      "деньги",
      "работа",
      "Киев",
      "богатство",
      "процветание",
      "собственный вебсайт",
      "hipstacoding",
      "hipsta",
      "coding",
      "school",
      "it shool kyiv",
    ],
  },
  plugins: [
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1200,
        backgroundColor: "transparent",
      },
    },
    `gatsby-plugin-split-css`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/lesson-template.jsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              backgroundColor: "transparent",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: process.env.GA_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: path.join(__dirname, "src/pages"),
    //     ignore: ["**/slides/**/*"],
    //     // See pattern syntax recognized by micromatch
    //     // https://www.npmjs.com/package/micromatch#matching-features
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-plugin-svgr",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: title,
    //     short_name: "hipstacoding.school",
    //     start_url: "/",
    //     background_color: "#282c34",
    //     display: "minimal-ui",
    //     icon: "src/assets/images/hipsta-logo-favicon.png", // This path is relative to the root of  the site.
    //     theme_color_in_head: false,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
};
