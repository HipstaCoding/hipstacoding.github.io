const title = "Hipsta Coding School";
const description =
  "Hipsta Coding School - прогрессивные курсы креативного программирования. Идет набор на курс ''";

module.exports = {
  siteMetadata: {
    title,
    siteUrl: "https://hipstacoding.school/",
    description,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID,
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-svgr",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: title,
    //     short_name: "hipstacoding.school",
    //     start_url: "/",
    //     background_color: "#292D34",
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
