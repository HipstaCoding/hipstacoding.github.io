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
