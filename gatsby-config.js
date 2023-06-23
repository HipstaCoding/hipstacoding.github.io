const title = "Hipsta Coding School";
const description =
  "Hipsta Coding School - прогрессивные курсы креативного программирования. КУРС FRONT-END (HTML5+CSS3, JAVASCRIPT, REACT) РАЗРАБОТКИ С НУЛЯ.";

module.exports = {
  siteMetadata: {
    title,
    siteUrl: "https://hipstacoding.github.io/",
    description,
    image: "https://hipstacoding.github.io/hipsta-logo.jpg"
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
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgo: true,
        svgoConfig: {
          removeViewBox: false, // remove viewBox when possible (default)
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: "hipstacoding.github.io",
        start_url: "/",
        background_color: "#282c34",
        display: "minimal-ui",
        icon: "src/assets/icons/favicon.png", // This path is relative to the root of  the site.
        theme_color_in_head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
};
