module.exports = {
  siteMetadata: {
    title: `Basic Wavez - Home`,
    subtitle: `blah`,
    description: `Electronic Music Production tutorials, tips, product reviews, sample packs and products.`,
    author: `Panda Face`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
       
        baseUrl: "localhost:8888",
       
        protocol: "http",
        
        hostingWPCOM: false,
       
        useACF: true,
       
        verboseOutput: true,

        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
